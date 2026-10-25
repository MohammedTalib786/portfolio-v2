import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import CustomButton from "../CustomButton/CustomButton";


const ContactForm = () => {

    let [messageBox, setMessageBox] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            yourName: "",
            yourEmail: "",
            yourMessage: "",
        }
    });


    const handlerSubmitForm = async (data) => {
        // >>>>>>>>>> Performing Fake Submission
        // await new Promise(res => setTimeout(() => res("Submitting"), 6500));

        let { yourName, yourEmail, yourMessage } = data;

        try {
            // Receiver - Admin
            await emailjs
                .send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_RECEIVER_ID, { yourName: yourName, yourEmail: yourEmail, yourMessage: yourMessage }, {
                    publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
                })

            // Sender - User
            await emailjs
                .send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_SENDER_ID, { yourName: yourName, yourEmail: yourEmail, yourMessage: yourMessage }, {
                    publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
                })

            // console.log('the Data', data, typeof data);
            console.log("Message Sent Successfully!");

            setMessageBox("✅ Thanks for reaching out. Your message has been sent.");
            reset();
        }

        catch (e) {
            console.log("SERVER ERROR:", e.text);
            console.log("Something went wrong while sending your message. Please try again shortly.")
            setMessageBox("❌ Something went wrong while sending your message. Please try again shortly.");
        }
    }

    const handlerInvalidSubmit = () => {
        setMessageBox("⚠️ Please check the highlighted fields and correct the errors.");
        console.log(" Please check the highlighted fields and correct the errors.")
    };


    return (
        <form className=" w-full h-full  flex justify-start items-start flex-col  "
            onSubmit={handleSubmit(handlerSubmitForm, handlerInvalidSubmit)}   >

            <div className=" name_and_email_cont w-full flex mb-7 gap-7  tab:flex-row flex-col ">

                <div className=" nameCont w-full flex flex-col ">
                    <label htmlFor="yourName"
                        className=" font-btn-text  text-text-dark-black  mb-2  "
                    >Your name</label>
                    <input
                        type="text"
                        className={` ${errors.yourName ? "errorMsg" : "validInp"} yourName bg-[#fdf9fa] py-1 px-3 border border-[#a49d95] font-manrope text-[14px]/[20px] font-normal text-text-dark-black `}
                        id="yourName"
                        placeholder="e.g. Alex Morgan"
                        {...register("yourName",
                            {
                                required: { value: true, message: "Please enter your name." },
                                // minLength: { value: 3, message: "Minimum 3 characters is required!" },
                                maxLength: { value: 40, message: "Please use 40 characters or fewer." }
                            }
                        )
                        }
                    />
                    {
                        errors.yourName && <p className=" mt-2 text-[14px]/[20px] text-red-600 " >{errors.yourName.message}</p>
                    }
                </div>

                <div className=" emailCont w-full flex flex-col ">
                    <label htmlFor="yourEmail"
                        className=" font-manrope  font-btn-text  text-text-dark-black  mb-2  "
                    >Email address</label>
                    <input
                        type="email"
                        className={` ${errors.yourEmail ? "errorMsg" : "validInp"} yourEmail bg-[#fdf9fa] py-1 px-3 border border-[#a49d95] font-manrope text-[14px]/[20px] font-normal text-text-dark-black `}
                        id="yourEmail"
                        placeholder="e.g. alex@example.com"
                        {...register("yourEmail",
                            {
                                required: { value: true, message: "Please enter your email address." },
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address." }
                            }
                        )
                        }
                    />
                    {
                        errors.yourEmail && <p className=" mt-2 text-[14px]/[20px] text-red-600 " >{errors.yourEmail.message}</p>
                    }
                </div>

            </div>

            <div className=" w-full message_cont mb-7 flex flex-col  ">
                <label htmlFor="yourMessage"
                    className=" font-manrope  font-btn-text  text-text-dark-black  mb-2  "
                >Message</label>
                <textarea
                    className={` ${errors.yourMessage ? "errorMsg" : "validInp"} yourMessage bg-[#fdf9fa] p-3 border border-[#a49d95] font-manrope text-[14px]/[20px] font-normal text-text-dark-black `}
                    id="yourMessage"
                    rows={7}
                    placeholder="Tell me a little about what you have in mind..."
                    {...register("yourMessage",
                        {
                            required: { value: true, message: "Please enter a message." },
                            maxLength: { value: 1000, message: "Please use 1000 characters or fewer." }
                        }
                    )
                    }
                />
                {
                    errors.yourMessage && <p className=" mt-2 text-[14px]/[20px] text-red-600 " >{errors.yourMessage.message}</p>
                }
            </div>

            <div className="submit_cont mb-7  ">

                <CustomButton
                    as="button"
                    className=" button button-primary still_icon flex items-center  "
                    type="submit"
                    disabled={isSubmitting}
                    icon={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className=" z-[99]  w-[18px] h-[18px] -rotate-45 -mt-[5px]  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </CustomButton>

            </div>

            <p className=" messageBox font-manrope text-[16px]/[24px] font-medium text-text-dark-black tracking-[.2px] " >{messageBox}</p>

        </form>
    )
}

export default ContactForm;
