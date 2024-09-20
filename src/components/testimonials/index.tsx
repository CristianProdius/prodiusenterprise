"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export const testimonials = [
  {
    text: "Their AI-powered letter generation tool cut our legal document preparation time by 75%. Incredible ROI!",
    imageSrc: "/avatar-1.png",
    name: "Sarah J.",
    username: "Law Firm Partner",
  },
  {
    text: "We used to spend 20 hours a week on data entry. Now it's automated, and we focus on strategy instead. ",
    imageSrc: "/avatar-2.png",
    name: "Michael T.",
    username: "Marketing Director",
  },
  {
    text: "The custom CRM integration they built has streamlined our sales process beyond our wildest expectations.",
    imageSrc: "/avatar-3.png",
    name: "Morgan Lee",
    username: "Sales Manager",
  },
  {
    text: "Our inventory management is now fully automated. It's like having an extra team member who never sleeps!",
    imageSrc: "/avatar-4.png",
    name: "David C.",
    username: "Retail Store Owner",
  },
  {
    text: "The AI chatbot they implemented handles 80% of our customer queries. Our support team is now much more efficient.",
    imageSrc: "/avatar-5.png",
    name: " Emma R.",
    username: "Customer Service Lead",
  },
  {
    text: "Automating our invoicing process has not only saved time but also reduced errors to nearly zero.",
    imageSrc: "/avatar-6.png",
    name: "Roberta F.",
    username: "Finance Manager",
  },
  {
    text: "Their custom solution automates our entire employee onboarding process. It's a game-changer for HR.",
    imageSrc: "/avatar-7.png",
    name: "Mario M.",
    username: "HR Director",
  },
  {
    text: "The automated report generation tool they built saves us countless hours each month. Data-driven decisions are now a breeze.",
    imageSrc: "/avatar-8.png",
    name: "Emily D",
    username: "Business Intelligence Analyst",
  },
  {
    text: "Our manufacturing process is now optimized thanks to their IoT and AI integration. Productivity is up 30%!",
    imageSrc: "/avatar-9.png",
    name: "Hasan Harper",
    username: "Operations Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  clasName?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.clasName}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6 "
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(
              ({ text, imageSrc, name, username }, idx) => (
                <div className="card" key={`${index}-${idx}`}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={imageSrc}
                      width={40}
                      height={40}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title mt-5"> What Our Clients Say</h2>
          <p className="section-description mt-5">
            From tailored automation solution to powerful AI integrations. We
            save the pricios time of business.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            clasName="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            clasName="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
