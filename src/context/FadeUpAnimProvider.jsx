import { createContext, useContext } from "react";

export const FadeUpAnimContext = createContext({
    fadeUpAnim: {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1 },
        viewport: {
            margin: "-30px",
            once: true
        }
    }
});

export const FadeUpAnimProvider = FadeUpAnimContext.Provider;

export const useFadeUpAnim = () => {
    return useContext(FadeUpAnimContext);
}
