'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import not_founded from "@/public/assets/images/not_founded_image.png";
import SeeMoreButton from "@/components/ui/buttons/SeeMoreButton";
import BackImage from "@/components/ui/images/BackImage";

export default function NotFoundPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-9vw)] bg-secondary-500 text-center p-[.5vw]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <BackImage
          src={not_founded}
          alt="404 Not Found"
          width={300}
          height={300}
          className="w-[20vw] h-[20vw] -z-50"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-h1 font-bold text-black-500"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-main text-black-500 mt-[.5vw]"
      >
        Էջը չի գտնվել
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-[2vw]"
      >
        <SeeMoreButton link={"/"} text={"Վերադառնալ Գլխավոր Էջ"} />
      </motion.div>
    </div>
  );
}
