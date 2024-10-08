"use client";
import React, { useState } from "react";
import { ArrowRight } from "@/icons/arrow-right";
import Image from "next/image";
import { MenuIcon } from "@/icons/menu";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block ">
          Streamline your operations with automated workflows
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for Free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Image src={"/logosaas.png"} alt="logo" width={40} height={40} />
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <IoMdClose className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
            <nav className="hidden  md:flex gap-6 text-black/60 items-center">
              {/*  <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>*/}
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1F91xznzUhBkpCQak88DLvKICPz-8kGt5hYoIyUAWeP5l28agyectfbtO-aHmZwCGE6acPIcEb">
                  Get for Free
                </a>
              </button>
            </nav>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#eaeefe]  absolute top-full left-0 right-0 shadow-lg">
          <nav className="flex flex-col gap-4 p-4">
            {/*<a href="#" className="text-black/60">
              About
            </a>
            <a href="#" className="text-black/60">
              Features
            </a>
            <a href="#" className="text-black/60">
              Customers
            </a>
            <a href="#" className="text-black/60">
              Updates
            </a>
            <a href="#" className="text-black/60">
              Help
            </a>*/}
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1F91xznzUhBkpCQak88DLvKICPz-8kGt5hYoIyUAWeP5l28agyectfbtO-aHmZwCGE6acPIcEb">
              Get for Free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
