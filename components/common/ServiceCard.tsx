import Image from "next/image";
import { motion } from "framer-motion";
import { Service } from "@/components/home/Services";
import { EASE } from "@/components/common/animations";

const lightFadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <motion.div
      variants={lightFadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="relative h-full"
    >
      <div className="h-full rounded-2xl md:rounded-3xl rounded-b-[40px] bg-white/4 backdrop-blur-[6px] border-2 border-white/30 card">
        <h3 className="text-lg lg:text-xl xl:text-2xl text-white/90 font-semibold rounded-t-3xl p-4 xl:p-7 xl:pb-5 mb-7 lg:mb-10 xl:mb-16 border-b-2 border-white/30">
          {service.title}
        </h3>

        <figure className="relative w-full h-[280px] xl:h-[351px] overflow-hidden rounded-2xl">
          <Image
            src={service.mockupImg}
            alt={service.title}
            fill
            className="object-cover"
          />
        </figure>
      </div>
    </motion.div>
  );
}
