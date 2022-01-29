// import FooterComponent from '@components/Footer/Footer';
// import ErrorComponent from '@components/404/404';
import Head from 'next/head'
import React from 'react';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';
import NotFound from '@components/NotFound';

const NotFoundPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>404 - Resource Not Found | WWWE?</title>
            </Head>
            <Navigation />
            <NotFound />
            <Footer />
        </>
    );
}  

export default NotFoundPage