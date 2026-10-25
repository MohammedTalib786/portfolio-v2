import { Accordion } from 'radix-ui';
import './accordian.css';


const Accordian = () => {

    let skills_faqs = [
        {
            id: 1,
            title: "Frontend",
            content: "HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS, jQuery",
            value: "skillSet-1"
        },
        {
            id: 2,
            title: "CMS & Ecommerce",
            content: "WordPress, Custom Theme Development, Elementor Page Builder, WooCommerce, Payment Integration, Core PHP, ACF, Custom Post Types, Taxonomies, Shopify Fundamentals",
            value: "skillSet-2"
        },
        {
            id: 3,
            title: "UI & Interaction",
            content: "Swiper, Framer Motion, Lenis",
            value: "skillSet-3"
        },
        {
            id: 4,
            title: "Deployment & tools",
            content: "Git, GitHub, SEO, Vercel, Adobe Photoshop, Figma",
            value: "skillSet-4"
        },

        {
            id: 5,
            title: "Others",
            content: "Website Performance, Responsive Design, REST API Integration, Email Integration",
            value: "skillSet-5"
        },
    ];


    return (

        <Accordion.Root
            className="AccordionRoot faq_accord_cont w-full flex flex-col  "
            type="single"
            defaultValue="skillSet-1"
            collapsible  >
            {
                skills_faqs.map(elem => {
                    return (
                        <Accordion.Item
                            key={elem.id}
                            id={elem.id}
                            className="AccordionItem w-full bg-[#f4f4f4] "
                            value={elem.value}  >

                            <Accordion.Trigger
                                className=' accord_trigger text-left font-dm-serif font-normal tab:text-[24px]/[32px] text-[20px]/[26px] text-text-dark-black  w-full tab:p-5 p-4 cursor-pointer flex items-center justify-between '
                            >
                                <p className="m-0 p-0 w-full   " >{elem.title}</p>
                                <span className=' skillsNum tab:mr-3 mr-1  ' >({elem.content.split(',').length})</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-7 h-7 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </Accordion.Trigger>

                            <Accordion.Content
                                className='AccordionContent  font-manrope font-normal text-[14px]/[24px] dang-cont '  >
                                <ul className='skills-badge m-0 font-manrope gt-tab:text-[16px]/[24px] text-[14px]/[20px] font-normal faq-content px-5 pb-5 flex flex-wrap items-center justify-start gap-[14px]   '  >
                                    {
                                        elem.content.split(",").map(listSkill => <li
                                            className=' py-[5px] px-4 rounded-[6px] bg-[#ffffff2e] tracking-[.8px] '
                                            key={listSkill.toLowerCase().split(' ').filter(str => str !== "").join('-')}
                                            id={listSkill.toLowerCase().split(' ').filter(str => str !== "").join('-')}
                                        >{listSkill}</li>)
                                    }
                                </ul>
                            </Accordion.Content>

                        </Accordion.Item>
                    )
                })
            }
        </Accordion.Root>

    )
}

export default Accordian;
