import { Helmet } from "react-helmet-async"

// LIVE URL
const SITE_URL = "https://talib-dev.vercel.app/";

// DEV URL
// get from env

const DEFAULT_IMAGE = `${SITE_URL}opengraph-image.png`;


const SEO = ({
    title,
    description,
    path = "/",
    image = DEFAULT_IMAGE,
    noIndex = false,
}) => {


    const canonicalURL = `${SITE_URL}${path}`;

    return (

        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />

            <meta
                name="robots"
                content={noIndex ? "noindex, nofollow" : "index, follow"}
            />

            <link rel="canonical" href={canonicalURL} />


            {/* Open Graph */}
            <meta property="og:type" content="website" />

            <meta property="og:site_name" content="Mohammed Talib" />

            <meta property="og:title" content={title} />

            <meta property="og:description" content={description} />

            <meta property="og:url" content={canonicalURL} />

            <meta property="og:image" content={image} />


            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:title" content={title} />

            <meta name="twitter:description" content={description} />

            <meta name="twitter:image" content={image} />

        </Helmet>
    )
}

export default SEO;
