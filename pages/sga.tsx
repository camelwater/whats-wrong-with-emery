import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import SmoothScroll from "@components/SmoothScroll";
import Head from "next/head";

const SGAPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>
                    SGA Portal | WWWE?
                </title>
            </Head>
            <SmoothScroll />
            <Navigation />
            <Footer />
        </>
    );
};

export default SGAPage;