"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdConveyorBelt } from "react-icons/md";
import { FaDatabase, FaUserTie } from "react-icons/fa6";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";

export const ProductFeatures = [
  {
    title: "Workflow Automation",
    description:
      "Streamline complex business processes and eliminate repetitive tasks.",
    image: <MdConveyorBelt size={24} color="#fff" />,
  },
  {
    title: "AI-Powered Document Processing",
    description:
      "Automate document creation, analysis, and management with advanced AI.",
    image: <AiOutlineFileSearch size={24} color="#fff" />,
  },
  {
    title: "Data Integration & Analytics",
    description:
      "Connect disparate systems and gain actionable insights from your data.",
    image: <FaDatabase size={24} color="#fff" />,
  },
  {
    title: "Customer Service Automation",
    description:
      "Implement AI chatbots and automated ticketing systems to enhance customer experience.",
    image: <RiCustomerService2Line size={24} color="#fff" />,
  },
  {
    title: "Financial Process Automation",
    description:
      "Automate invoicing, payroll, and financial reporting for improved accuracy.",
    image: <GiMoneyStack size={24} color="#fff" />,
  },
  {
    title: "HR & Recruitment Automation",
    description:
      "Streamline onboarding, performance management, and talent acquisition processes.",
    image: <FaUserTie size={24} color="#fff" />,
  },
];

type Props = {
  features?: typeof ProductFeatures;
};

const ProductShowcase = ({ features = ProductFeatures }: Props) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="max-w-[1240px] mx-auto px-4 ">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Automate Your Success</div>
          </div>
          <h2 className="section-title mt-5">
            Streamline Operations, Boost Efficiency
          </h2>
          <p className="section-description mt-5">
            We provide automations that simplify complex tasks, reduce errors,
            and free up your time to focus on what matters most.
          </p>
        </div>

        <div className="relative">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#183ec2] to-[#00a3ff] rounded-full mb-2">
                  {feature.image}
                </div>
                <h3 className="text-xl text-center font-semibold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6b7c93] text-[16px] text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <motion.img
            src="/pyramid.png"
            width={265}
            height={262}
            alt="Pyramid"
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY: translateY }}
          />
          <motion.img
            src="/tube.png"
            width={265}
            height={262}
            alt="tube"
            className="hidden md:block absolute -left-36 bottom-10"
            style={{ translateY: translateY }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
