import Image from "next/image";
import React from "react";

type Props = {};

const ProductShowcase = (props: Props) => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="max-w-[1240px] mx-auto px-4 ">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn you ideas into a fully functional, reponsive, SaaS
            website in just minutes with this template.
          </p>
        </div>

        <div className="relative">
          <Image
            src="/product-image.png"
            width={2408}
            height={1542}
            alt="Product Showcase"
            className="mt-10"
          />
          <Image
            src="/pyramid.png"
            width={265}
            height={262}
            alt="Pyramid"
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src="/tube.png"
            width={265}
            height={262}
            alt="tube"
            className="hidden md:block absolute -left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
