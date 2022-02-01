import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import SmoothScroll from "@components/SmoothScroll";
import Head from "next/head";
import MessageBoard from "@components/MessageBoard";

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
            <MessageBoard />
            <Footer />
        </>
    );
};

export default MessageBoardPage;