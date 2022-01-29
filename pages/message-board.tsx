import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import SmoothScroll from "@components/SmoothScroll";
import Head from "next/head";

const MessageBoardPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>
                    Message Board | WWWE?
                </title>
            </Head>
            <SmoothScroll />
            <Navigation />
            <Footer />
        </>
    );
};

export default MessageBoardPage;