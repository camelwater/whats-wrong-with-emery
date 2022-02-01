import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import SmoothScroll from "@components/SmoothScroll";
import Head from "next/head";
import SGA from "@components/SGA";

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
            <SGA />
            <Footer />
        </>
    );
};

export default SGAPage;