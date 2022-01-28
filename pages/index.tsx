import Head from 'next/head';
import React from 'react';
import { ContentWrapper } from '@styles/stitches.config';
// import 'animate.css/animate.min.css';
import SmoothScroll from '@components/SmoothScroll';
import Navigation from '@components/Nav/Nav';
import Footer from '@components/Footer';


const HomePage: React.FC<{ allImages }> = ({ allImages }) => {

  return (
    <ContentWrapper>
      <Head>
        <title>What&apos;s Wrong With Emery?</title>
      </Head>
      <SmoothScroll />
      <Navigation isHome/>
      <Footer />
    </ContentWrapper>
  );
}

export default HomePage;