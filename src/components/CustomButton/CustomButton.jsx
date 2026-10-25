import { Link } from "react-router-dom";


const CustomButton = ({
    as = "a",
    href,
    to,
    type,
    children,
    icon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" z-[99] w-4 h-4 " >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>),
    className = "",
    onClick,
    ...props
}) => {

    const handleHashClick = (e, url) => {
        onClick?.(e);

        if (e.defaultPrevented) return;

        if (!url?.startsWith("#")) return;

        const target = document.getElementById(url.slice(1));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        if (window.location.hash !== url) {
            window.history.pushState(null, "", url);
        }
    };

    const commonProps = {
        className,
        onClick,
        ...props,
    };


    if (as === "Link") {
        return (
            <Link
                to={to}
                {...commonProps}
                onClick={(e) => handleHashClick(e, to)} >
                <span className=" btn-bg-hov  " ></span>
                <span className=" z-[99] " >{children}</span>
                {icon}
            </Link>
        )
    }

    if (as === "button") {
        return (
            <button
                type={type}
                {...commonProps}
                onClick={onClick}  >
                <span className=" btn-bg-hov  " ></span>
                <span className=" z-[99] " >{children}</span>
                {icon}
            </button>
        )
    }

    return (
        <a
            href={href}
            {...commonProps}
            onClick={(e) => handleHashClick(e, href)}  >
            <span className=" btn-bg-hov  " ></span>
            <span className=" z-[99] " >{children}</span>
            {icon}
        </a>
    )
}

export default CustomButton;
