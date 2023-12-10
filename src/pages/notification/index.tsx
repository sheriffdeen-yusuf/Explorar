import AppLayout from "@/components/AppLayout";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <AppLayout>
      <div className="flex h-screen  flex-col items-center justify-center gap-8 bg-[url('/notification.png')] bg-cover bg-center  md:bg-[url('/notificationLarge.png')]">
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
    </AppLayout>
  );
}

export default index;
