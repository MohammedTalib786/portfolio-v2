import CustomButton from '../CustomButton/CustomButton';


const CtaComp = () => {

    return (
        <section className="contact bg-bg-grey w-full desktop:py-28 tab:py-20 py-13 " id="contact"  >

            <div className=" container flex justify-between tab:items-end items-start tab:flex-row flex-col tab:gap-0 gap-10  " >

                <div>
                    <span className=" font-slug text-accent ">Have Something In Mind?</span>
                    <h3 className=" mt-5 font-cta-h text-text-dark-black  " >Let&rsquo;s make something <br className=" gt-tab:block hidden " />useful — and unmistakably <br className=" gt-tab:block hidden " />yours.</h3>
                </div>

                <div className=" "  >

                    <CustomButton
                        as='Link'
                        to="#contact-form"
                        className="button button-primary w-full text-nowrap  "
                    >Start a Conversation
                    </CustomButton>

                </div>

            </div>

        </section>
    )
}

export default CtaComp;
