import AppLayout from "@/components/AppLayout";
import React from "react";
import Link from "next/link";

function index() {
  return (
    <div className="flex  gap-8 flex-col items-center ">
    <div className="w-full h-80 text-center items-center">
      <h1 className="bg-[url('/restaurantbg.svg')] h-full bg-cover bg-no-repeat bg-center text-white pt-20">Restaurants</h1>
    </div>
    
    <Link href="/">
      <button className="button-minor">Restaurant's Name</button>
    </Link>
    <Link href="/">
      <button className="button-minor">Reservation for</button>
    </Link>
    <Link href="/">
      <button className="button-minor">Table for</button>
    </Link>
    <Link href="/" className="mt-14">
      <button className="button-minor">Save</button>
    </Link>

  </div>

  )
  // <AppLayout>Restuarant</AppLayout>;
}

export default index;
