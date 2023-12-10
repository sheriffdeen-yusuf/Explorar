import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="text-shadow flex  items-center justify-center text-4xl font-extrabold uppercase text-[#2F0808] ">
      Expl
      <Image
        src="/globe.svg"
        height={40}
        width={40}
        className="animate-spin "
        alt="globe"
      />
      ra
    </div>
  );
}

export default Logo;
