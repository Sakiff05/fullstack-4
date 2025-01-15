import React from "react";
import Hero from "../components/hero/Hero";
import Shop from "../components/shop/Shop";
import About from "../components/about/About";
import Leader from "../components/leadership/Leader";
import Services from "../components/services/Services";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Hero />
      <Shop />
      <About />
      <Leader />
      <Services />
    </>
  );
}
