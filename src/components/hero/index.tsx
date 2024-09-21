"use client";

import { ArrowRight } from "@/icons/arrow-right";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_96%)] overflow-x-clip "
    >
      <div className=" md:flex md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 pt-10 gap-8">
        <div className="md:w-[578px]">
          <div className="tag">Version 2.0 is here</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
            Automate. Achieve. Excel.
          </h1>
          <p className="text-xl text-[#010d3e] tracking-tight mt-6">
            Simplify your business, boost productivity, and unlock your full
            potential with our intelligent automation solutions.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">
              {" "}
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1F91xznzUhBkpCQak88DLvKICPz-8kGt5hYoIyUAWeP5l28agyectfbtO-aHmZwCGE6acPIcEb">
                Get in Contact
              </a>
            </button>
            <div className="flex items-center gap-1">
              <button className="btn btn-text">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <motion.img
            src="/cog.png"
            width={520}
            height={520}
            alt="Hero shape"
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="/cylinder.png"
            width={220}
            height={220}
            alt="Hero cylinder"
            className="hidden md:block -top-8 -left-32  md:absolute "
            style={{ translateY: translateY }}
          />
          <motion.img
            src="/noodle.png"
            width={220}
            height={220}
            alt="Hero noodle image"
            className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] "
            style={{ translateY: translateY, rotate: 30 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
