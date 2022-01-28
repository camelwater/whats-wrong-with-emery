import Head from 'next/head';
import React from 'react';
import { ContentWrapper } from '@styles/stitches.config';
// import 'animate.css/animate.min.css';
import SmoothScroll from '@components/SmoothScroll';


const HomePage: React.FC<{ allImages }> = ({ allImages }) => {

  return (
    <ContentWrapper>
      <Head>
        <title>What&apos;s Wrong With Emery?</title>
      </Head>
      <SmoothScroll />
      {/* <NavigationComponent isHome/>
      <FooterComponent /> */}
    </ContentWrapper>
  );
}

export default HomePage;