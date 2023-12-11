import AppLayout from "@/components/AppLayout";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <AppLayout>
      <div className="flex h-screen  flex-col items-center justify-center gap-8 bg-[url('/notification.png')] bg-cover bg-center  md:bg-[url('/notificationLarge.png')]">
        <Link href="/notification/FlightsNotification">
          <button className="button-main">Flights</button>
        </Link>
        <Link href="/notification/HotelsNotification">
          <button className="button-main">Hotels</button>
        </Link>
        <Link href="/notification/CarrentalsNotification">
          <button className="button-main">Car rentals</button>
        </Link>
        <Link href="/notification/RestaurantsNotification">
          <button className="button-main">Restaurants</button>
        </Link>
      </div>
    </AppLayout>
  );
}

export default index;
