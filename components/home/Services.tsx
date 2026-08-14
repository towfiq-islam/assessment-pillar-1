"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import serviceBg from "@/assets/Services.png";
import uiMockup from "@/assets/contain.png";
import webMockup from "@/assets/web_design.png";
import landingMockup from "@/assets/landing_page.png";
type Service = {
  title: string;
  mockupImg: StaticImageData;
};

const services: Service[] = [
  {
    title: "UI/ UX Design",
    mockupImg: uiMockup,
  },
  {
    title: "Web Design",
    mockupImg: webMockup,
  },
  {
    title: "Landing Page",
    mockupImg: landingMockup,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative -mt-7 md:-mt-10 overflow-hidden rounded-t-2xl md:rounded-t-[50px] bg-secondary-black text-white pb-9 xl:pb-12 pt-8 md:pt-10 lg:pt-14 xl:pt-24">
      {/* Background Image */}
      <Image
        src={serviceBg}
        alt="service"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative">
        {/* Header */}
        <div className="mb-7 md:mb-10 xl:mb-14 flex flex-col justify-between gap-2 md:gap-6 sm:flex-row md:items-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
            My <span className="text-primary-orange">Services</span>
          </h2>
          <p className="max-w-lg text-sm md:text-[15px] xl:text-base text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 lg:gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-6 md:mt-8 xl:mt-10 flex justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show service ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-primary-orange" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`rounded-2xl md:rounded-3xl rounded-b-[40px] bg-white/4 backdrop-blur-[6px] border-2 border-white/30 card`}
      >
        <h3 className="text-lg lg:text-xl xl:text-2xl text-white/90 font-semibold rounded-t-3xl p-4 xl:p-7 xl:pb-5 mb-7 lg:mb-10 xl:mb-16 border-b-2 border-white/30">
          {service.title}
        </h3>

        <figure className="relative overflow-hidden rounded-2xl">
          <Image
            src={service?.mockupImg}
            alt={service?.title}
            className="h-[230px] lg:h-[280px] xl:h-[351px]"
          />
        </figure>
      </div>
    </div>
  );
}
