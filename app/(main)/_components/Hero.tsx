import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type HeroProps = {
  name?: string;
  role?: string;
  greeting?: string;
  testimonial?: {
    quote: string;
  };
  experience?: {
    years: string;
    label: string;
  };
  imageSrc?: string;
  className?: string;
};

export default function Hero({
  name = "Jenny",
  role = "Product Designer",
  greeting = "Hello!",
  testimonial = {
    quote:
      "Jenny's Exceptional product design ensure our website's success Highly Recommended",
  },
  experience = { years: "10 Years", label: "Experience" },
  imageSrc = "/jenny.png",
  className = "",
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-white pb-24 pt-14 text-secondary-black ${className}`}
    >
      <div className="container relative">
        {/* Greeting badge */}
        <div className="relative mx-auto mb-6 w-fit">
          <span className="flex items-center gap-2 rounded-full border border-secondary-black/10 px-5 py-2 text-sm font-medium shadow-sm">
            {greeting}
          </span>
          <Squiggle className="absolute -right-8 -top-3 h-6 w-8 text-primary-orange" />
        </div>

        {/* Heading */}
        <div className="relative mx-auto max-w-2xl text-center">
          <Squiggle className="absolute -left-10 top-10 hidden h-10 w-10 -scale-x-100 text-primary-orange/70 sm:block" />

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            I&apos;m <span className="text-primary-orange">{name}</span>,
            <br />
            {role}
          </h1>
        </div>

        {/* Image + side stats */}
        <div className="relative mt-14 grid items-center gap-8 lg:grid-cols-[1fr_1.4fr_1fr]">
          {/* Testimonial */}
          <div className="order-2 mx-auto max-w-[220px] text-center lg:order-1 lg:mx-0 lg:text-left">
            <FaQuoteLeft className="mx-auto mb-3 h-6 w-6 text-secondary-black/70 lg:mx-0" />
            <p className="text-sm leading-relaxed text-secondary-black/70">
              {testimonial.quote}
            </p>
          </div>

          {/* Photo with orange arc backdrop */}
          <div className="relative order-1 mx-auto aspect-square w-full max-w-md lg:order-2">
            <div className="absolute inset-x-6 bottom-0 top-16 rounded-t-full bg-primary-orange" />
            <div className="relative mx-auto h-full w-full">
              <Image
                src={imageSrc}
                alt={`Portrait of ${name}`}
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 448px, 80vw"
              />
            </div>
          </div>

          {/* Rating + experience */}
          <div className="order-3 mx-auto text-center lg:mx-0 lg:text-right">
            <div className="mb-2 flex justify-center gap-1 text-primary-orange lg:justify-end">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-2xl font-bold">{experience.years}</p>
            <p className="text-sm text-secondary-black/50">
              {experience.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 20C8 6 14 2 18 10C22 18 28 14 30 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 2C30 4 32 6 30 9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
