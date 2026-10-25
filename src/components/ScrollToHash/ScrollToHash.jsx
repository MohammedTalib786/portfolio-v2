import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = decodeURIComponent(hash.slice(1));

        // Wait for the new route's DOM to render
        requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }, [pathname, hash]);

    return null;
}

export default ScrollToHash;
