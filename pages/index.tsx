import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Link from "next/link";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>babypups</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="5 Samoyed Puppies for sale. Las Vegas NV" />
        <meta property="og:title" content="Samoyed puppies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/puppypics/IMG_20221129_071245_184.jpg" />
        <meta property="og:description"
          content="5 Samoyed Puppies for sale. Las Vegas NV" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Samoyed Puppies for sale" />
        <meta
          name="description"
          content="Puppies for sale"
        />
        <link rel="icon" href="/puppy.png" />
      </Head>
      <Hero heading="Surprise your Family for Christmas" message="5 Puppies Born October 14th" />
      
        <Portfolio />
      
      <Slider slides={SliderData} />
      <Instagram />
      <Contact />
    </>
  );
};

export default Home;
