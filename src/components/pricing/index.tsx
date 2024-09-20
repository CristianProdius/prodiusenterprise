"use client";
import { CheckIcon } from "@/icons/check";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { text } from "stream/consumers";

const pricingTiers = [
  {
    title: "Free Plan",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "One-time 30-minute consultation meeting",
      "Assessment of current processes",
      "Recommendations for potential automation improvements",
      "Basic automation roadmap",
    ],
  },
  {
    title: "Pro Plan",
    monthlyPrice: 1499,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Everything in Free Plan",
      "Custom automation solution for one key business process",
      "Solution designed for up to 50 employees or 5 departments",
      "Implementation and integration support",
      "3 months of post-implementation support",
      "Quarterly performance review",
      "8 hours of training for your team",
    ],
  },
  {
    title: "Business Plan",
    monthlyPrice: 3999,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Everything in Pro Plan",
      "Custom automation solutions for up to 3 business processes",
      "Solutions designed for up to 200 employees or 15 departments",
      "Priority implementation and support",
      "6 months of post-implementation support",
      "Monthly performance reviews and optimizationr",
      "20 hours of training for your team",
      "Dedicated account manager",
      "API access for further customization",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 ">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free foreeve. Upgrade for unliomited automation, better security,
            and exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white/60"
                )}
                key={title}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white/50"
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature: string, index) => (
                    <li className="text-sm flex items-center gap-4" key={index}>
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
