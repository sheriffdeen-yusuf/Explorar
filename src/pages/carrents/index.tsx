import AppLayout from "@/components/AppLayout";
import React from "react";
import Image from "next/image";
import Link from "next/link";


function index() {
  return (
    // <AppLayout>Car Rentals</AppLayout>,
    <div className="flex  gap-8 flex-col items-center ">
      <div className="w-full h-80 text-center items-center">
        <h1 className="bg-[url('/carrentals.svg')] h-full bg-cover bg-no-repeat bg-center text-white pt-20">Car Rentals</h1>
      </div>
      
      <Link href="/">
        <button className="button-minor">Date of rental</button>
      </Link>
      <Link href="/">
        <button className="button-minor">Name of company</button>
      </Link>
      <Link href="/">
        <button className="button-minor">Type of vehicle</button>
      </Link>
      <Link href="/" className="mt-14">
        <button className="button-minor">Save</button>
      </Link>

    </div>
          )
}

export default index;
