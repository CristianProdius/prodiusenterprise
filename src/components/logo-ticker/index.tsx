"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="md:flex md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 ">
        <div className="flex overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src="/logo-acme.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 1"
            />
            <Image
              src="/logo-apex.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 2"
            />
            <Image
              src="/logo-celestial.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 3"
            />
            <Image
              src="/logo-echo.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 4"
            />
            <Image
              src="/logo-pulse.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 5"
            />
            <Image
              src="/logo-quantum.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 6"
            />

            {/*secound set of logos for animation*/}
            <Image
              src="/logo-acme.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 1"
            />
            <Image
              src="/logo-apex.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 2"
            />
            <Image
              src="/logo-celestial.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 3"
            />
            <Image
              src="/logo-echo.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 4"
            />
            <Image
              src="/logo-pulse.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 5"
            />
            <Image
              src="/logo-quantum.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 6"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
