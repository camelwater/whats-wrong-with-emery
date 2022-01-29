import React from 'react';
import Head from 'next/head';
// import 'animate.css/animate.min.css';
import SmoothScroll from '@components/SmoothScroll';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';
import Home from '@components/Home'

// TODO: add TopMessages/RandomMessages prop 
// as the home page will show random messages from the message board
const HomePage: React.FC = ( ) => {

  return (
    <>
      <Head>
        <title>What&apos;s Wrong With Emery?</title>
      </Head>
      <SmoothScroll />
      <Navigation isHome/>
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;