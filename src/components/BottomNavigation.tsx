import Image from "next/image";
import Link from "next/link";
import React from "react";

function BottomNavigation() {
  return (
    <footer className="fixed bottom-0 left-0 z-30 flex  h-[84px]   w-full items-center justify-around bg-[#00000054] text-slate-300 md:hidden ">
      <Link href="/home">
        <button className="flex flex-col items-center justify-center ">
          <Image
            src="/home.svg"
            height={50}
            width={50}
            className="pt-1"
            alt="icon-home"
          />
          Home
        </button>
      </Link>
      <Link href="/store">
        <button className="flex flex-col items-center justify-center ">
          <Image
            src="/search.svg"
            height={50}
            width={50}
            className="pt-1"
            alt="icon-notification"
          />
          DWN store
        </button>
      </Link>
      <Link href="/notification">
        <button className="flex flex-col items-center justify-center ">
          <Image
            src="/notification.svg"
            height={50}
            width={50}
            className="-ml-3 pt-1"
            alt="notification"
          />
          Notification
        </button>
      </Link>
      <Link href="">
        <button className="flex flex-col items-center justify-center ">
          <Image
            src="/profile.svg"
            height={50}
            width={50}
            className="pt-1"
            alt="icon-home"
          />
          Profile
        </button>
      </Link>
    </footer>
  );
}

export default BottomNavigation;
