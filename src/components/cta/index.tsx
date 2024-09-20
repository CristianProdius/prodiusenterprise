"use client";
import { ArrowRight } from "@/icons/arrow-right";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={ctaRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="max-w-[1240px] mx-auto px-4 relative">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Ready to Automate Your Business?</h2>
          <p className="section-description mt-5">
            Be efficient with custom automation tailored to your business.
          </p>
          <motion.img
            src="/star.png"
            width={360}
            height={360}
            alt="start"
            className="hidden md:block absolute -left-[220px] -top-[137px]"
            style={{ translateY: translateY }}
          />
          <motion.img
            src="/spring.png"
            width={360}
            height={360}
            alt="spring"
            className="hidden md:block absolute -right-[200px] -top-[19px]"
            style={{ translateY: translateY }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Try for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
