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
    <section className="relative -mt-10 overflow-hidden rounded-t-[50px] bg-secondary-black pb-12 pt-16 text-white sm:pt-24">
      {/* Background Image */}
      <Image
        src={serviceBg}
        alt="service"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row items-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            My <span className="text-primary-orange">Services</span>
          </h2>
          <p className="max-w-lg text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-10 flex justify-center gap-2">
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
        className={`rounded-3xl rounded-b-[40px] bg-white/4 backdrop-blur-[6px] border-2 border-white/30 card`}
      >
        <h3 className="text-2xl text-white/90 font-semibold rounded-t-3xl p-7 pb-5 mb-14 border-b-2 border-white/30">
          {service.title}
        </h3>

        <figure className="relative overflow-hidden rounded-2xl">
          <Image
            src={service?.mockupImg}
            alt={service?.title}
            className="h-[351px]"
          />
        </figure>
      </div>
    </div>
  );
}
