import Image from "next/image";
import React from "react";
import Logo from "./Logo";

function IntroLoader() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/onBoardingBg.svg"
        width={100}
        height={100}
        alt="bg"
        className="h-screen w-full object-cover"
      />
      <div className="absolute bottom-[20%] right-0 z-20  text-[#2F0808]">
        <Logo />
        <h1 className="">Web5-Powered</h1>
      </div>
    </div>
  );
}

export default IntroLoader;
