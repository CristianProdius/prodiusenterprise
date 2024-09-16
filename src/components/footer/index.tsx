import { SocialInstaIcon } from "@/icons/social-insta";
import { SocialLinkedInIcon } from "@/icons/social-linkedin";
import { SocialPinIcon } from "@/icons/social-pin";
import { SocialXIcon } from "@/icons/social-x";
import { SocialYouTubeIcon } from "@/icons/social-youtube";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image
            src="/logosaas.png"
            width={40}
            height={40}
            alt="logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialInstaIcon className="w-6 h-6" />
          <SocialLinkedInIcon className="w-6 h-6" />
          <SocialPinIcon className="w-6 h-6" />
          <SocialXIcon className="w-6 h-6" />
          <SocialYouTubeIcon className="w-6 h-6" />
        </div>
        <p className="mt-6 ">
          &copy; 2024 Prodius Enterprise, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
