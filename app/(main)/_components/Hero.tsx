import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import heroBg from "@/assets/hero.png";
import upperVector from "@/assets/upper_vector.png";
import lowerVector from "@/assets/lower_vector.png";

export default function Hero() {
  return (
    <section className="pb-4 pt-18 text-secondary-black">
      <div className="container relative">
        {/* Greeting badge */}
        <div className="relative mx-auto mb-3 w-fit">
          <span className="flex items-center gap-2 rounded-full border border-secondary-black/90 text-gray-800 px-8 py-2 text-lg font-semibold">
            Hello
          </span>

          <Image
            src={upperVector}
            alt="upper-vector"
            className="object-contain absolute -right-6 -top-5.5"
          />
        </div>

        {/* Title */}
        <div className="relative w-fit mx-auto text-center">
          <Image
            src={lowerVector}
            alt="upper-vector"
            className="absolute -left-12 -bottom-9  text-primary-orange/70 w-14"
          />

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-[65px]">
            I&apos;m <span className="text-primary-orange">Jenny</span>,
            <br />
            Project Designer
          </h1>
        </div>

        <div className="relative -mt-22 grid items-center lg:grid-cols-[1fr_1.4fr_1fr]">
          <div className="order-2 text-center w-[280px] lg:order-1 lg:text-left">
            <FaQuoteLeft className="mx-auto mb-4 h-6 w-6 text-[#344054] lg:mx-0" />
            <p className="leading-relaxed text-[#344054]">
              Jenny&apos;s Exceptional product design ensure our website&apos;s
              success Highly Recommended
            </p>
          </div>

          <figure className="relative -ml-12 w-[800px] h-[550px] lg:order-2">
            <Image src={heroBg} alt="hero" priority className="w-full h-full" />
          </figure>

          <div className="order-3 mx-auto text-center lg:mx-0 lg:text-right">
            <div className="mb-2 flex justify-center gap-1 text-primary-orange lg:justify-end">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="size-5" />
              ))}
            </div>
            <p className="text-3xl text-secondary-black/90 font-extrabold">10 Years</p>
            <p className="text-[15px] font-medium text-secondary-black/80">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
