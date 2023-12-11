import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [subLink, setSubLink] = useState(false);
  const [sublink2, setSubLink2] = useState(false);
  let activeLink = router.asPath;
  useEffect(() => {
    if (activeLink.endsWith("listedItems")) {
      setSubLink(true);
    }
    if (activeLink.endsWith("Notification")) setSubLink2(true);
  }, [activeLink]);

  return (
    <div className=" fixed inset-x-0 z-30 hidden min-h-[80px] items-center justify-between bg-white px-4 pt-4 md:flex">
      <Logo />
      <div>
        <div className="flex  gap-6 ">
          <Link href="/home" className="relative">
            <h3
              className={`nav-text ${
                activeLink.includes("/home") && "nav-text-active"
              }`}
            >
              Home
            </h3>
            {activeLink.includes("/home") && <Bing />}
          </Link>
          <Link href="/store" className="relative">
            <h3
              className={`nav-text ${
                (activeLink.includes("/store") || subLink) && "nav-text-active"
              }`}
            >
              DWN Store
            </h3>
            {(activeLink.includes("/store") || subLink) && <Bing />}
          </Link>
          <Link href="/notification" className="relative">
            <h3
              className={`nav-text ${
                (activeLink.includes("/notification") || sublink2) &&
                "nav-text-active"
              }`}
            >
              Notification
            </h3>
            {(activeLink.includes("/notification") || sublink2) && <Bing />}
          </Link>
          <Link href="/profile" className="relative">
            <h3
              className={`nav-text ${
                activeLink.includes("/profile") && "nav-text-active"
              }`}
            >
              Profile
            </h3>
            {activeLink.includes("/profile") && <Bing />}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
export const Bing = () => {
  return (
    <div className="absolute -right-2 -top-0">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500"></span>
      </span>
    </div>
  );
};
