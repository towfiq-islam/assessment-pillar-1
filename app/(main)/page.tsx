import React from "react";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import { ProductsSection } from "./_components/ProductsSection";

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <ProductsSection />
    </>
  );
};

export default page;
