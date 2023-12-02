import AppLayout from "@/components/AppLayout";
import { web5Connection } from "@/services/web5";
import Link from "next/link";
import React, { useEffect } from "react";

function index() {
  // useEffect(() => {
  //   web5Connection();
  // }, []);

  return (
    <div className="flex h-screen  flex-col items-center justify-center gap-8 bg-slate-200 bg-gradient-to-b  from-slate-200 to-[#481f0199]">
      <Link href="/filghts">
        <button className="button-main">Flights</button>
      </Link>
      <Link href="/hotels">
        <button className="button-main">Hotels</button>
      </Link>
      <Link href="/carrents">
        <button className="button-main">Car rentals</button>
      </Link>
      <Link href="/restaurants">
        <button className="button-main">Restaurants</button>
      </Link>
    </div>
  );
}

export default index;
