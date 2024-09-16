import { ArrowRight } from "@/icons/arrow-right";
import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_96%)] overflow-x-clip ">
      <div className=" md:flex md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 pt-10 gap-8">
        <div className="md:w-[478px]">
          <div className="tag">Version 2.0 is here</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010d3e] tracking-tight mt-6">
            Celebrate the joy of accomplisfments with an app designed to
            transgribe your progress, motivate your efforts, and celebrate your
            successes.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <div className="flex items-center gap-1">
              <button className="btn btn-text">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <Image
            src="/cog.png"
            width={520}
            height={520}
            alt="Hero shape"
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
          />
          <Image
            src="/cylinder.png"
            width={220}
            height={220}
            alt="Hero cylinder"
            className="hidden md:block -top-8 -left-32  md:absolute "
          />
          <Image
            src="/noodle.png"
            width={220}
            height={220}
            alt="Hero noodle image"
            className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
