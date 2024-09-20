import { SocialInstaIcon } from "@/icons/social-insta";
import { SocialLinkedInIcon } from "@/icons/social-linkedin";
import { SocialXIcon } from "@/icons/social-x";
import { SocialYouTubeIcon } from "@/icons/social-youtube";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="inline-flex relative ">
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
          <a href="" className="cursor:pointer">
            <SocialInstaIcon className="w-6 h-6" />
          </a>
          <a href="">
            <SocialLinkedInIcon className="w-6 h-6" />
          </a>
          {/*<SocialPinIcon className="w-6 h-6" />*/}
          <a href="">
            <SocialXIcon className="w-6 h-6" />
          </a>
          <a href="">
            <SocialYouTubeIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-6 ">
          &copy; 2024 Prodius Enterprise, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
