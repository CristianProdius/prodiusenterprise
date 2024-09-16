import Image from "next/image";
import React from "react";

type Props = {};

const LogoTicker = (props: Props) => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="md:flex md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 ">
        <div className="flex overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src="/logo-acme.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 1"
            />
            <Image
              src="/logo-apex.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 2"
            />
            <Image
              src="/logo-celestial.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 3"
            />
            <Image
              src="/logo-echo.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 4"
            />
            <Image
              src="/logo-pulse.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 5"
            />
            <Image
              src="/logo-quantum.png"
              className="logo-ticker-image"
              width={500}
              height={500}
              alt="Logo 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
