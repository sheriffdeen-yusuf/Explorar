import AppLayout from "@/components/AppLayout";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <AppLayout>
      <div className="flex h-screen  flex-col items-center justify-center gap-8 bg-[url('/store.png')] bg-cover bg-center  md:bg-[url('/storeLarge.png')]">
        <Link href="/filghts/listedItems">
          <button className="button-main">Flights</button>
        </Link>
        <Link href="/hotels/listedItems">
          <button className="button-main">Hotels</button>
        </Link>
        <Link href="/carrents/listedItems">
          <button className="button-main">Car rentals</button>
        </Link>
        <Link href="/restaurants/listedItems">
          <button className="button-main">Restaurants</button>
        </Link>
      </div>
    </AppLayout>
  );
}

export default index;
