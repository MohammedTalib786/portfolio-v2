export const handleHashClick = (e, url) => {
    if (!url?.includes("#")) return;

    const targetUrl = new URL(url, window.location.origin);
    const currentUrl = new URL(window.location.href);

    // Let React Router handle navigation to another route
    if (targetUrl.pathname !== currentUrl.pathname) return;

    const hash = targetUrl.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);

    if (!target) return;

    e.preventDefault();

    // Update URL only when the hash changes
    if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
    }

    target.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};
