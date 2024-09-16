import { ArrowRight } from "@/icons/arrow-right";
import Image from "next/image";
import React from "react";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="max-w-[1240px] mx-auto px-4 relative">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            yur progress and motivate your efforts.
          </p>
          <Image
            src="/star.png"
            width={360}
            height={360}
            alt="start"
            className="hidden md:block absolute -left-[220px] -top-[137px]"
          />
          <Image
            src="/spring.png"
            width={360}
            height={360}
            alt="spring"
            className="hidden md:block absolute -right-[200px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
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
