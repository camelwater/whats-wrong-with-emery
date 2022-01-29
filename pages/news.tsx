import Head from "next/head";
import SmoothScroll from "@components/SmoothScroll";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

const NewsPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>
                    News | WWWE?
                </title>
            </Head>
            <SmoothScroll />
            <Navigation />
            <Footer />
        </>
    );
};

export default NewsPage;