"use client";
import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

type Service = {
  title: string;
  mockupImg: string;
};

const services: Service[] = [
  {
    title: "UI/ UX Design",
    mockupImg: "/services/ui-ux.png",
  },
  {
    title: "Web Design",
    mockupImg: "/services/web-design.png",
  },
  {
    title: "Landing Page",
    mockupImg: "/services/landing-page.png",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative -mt-10 overflow-hidden rounded-t-[40px] bg-secondary-black pb-16 pt-16 text-white sm:pt-20">
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-primary-orange/25 blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-primary-orange/20 blur-[90px]" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full bg-primary-orange/30 blur-2xl" />

      <div className="container relative">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            My <span className="text-primary-orange">Services</span>
          </h2>
          <p className="max-w-xs text-sm text-white/50 sm:text-right">
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
    <div className="relative rounded-3xl bg-white/[0.04] p-4">
      <h3 className="mb-4 px-1 text-lg font-semibold">{service.title}</h3>

      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#EDE6DD]">
        <Image
          src={service?.mockupImg}
          alt={service?.title}
          fill
          className="object-cover object-top"
        />

        <a
          aria-label={`View ${service.title}`}
          className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-secondary-black text-white shadow-lg transition-transform hover:scale-105"
        >
          <FiArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
