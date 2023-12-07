{
  /* <h1 className="bg-[url('/carrentals.svg')] h-full bg-cover bg-no-repeat bg-center text-white pt-20">Car Rentals</h1> */
}
import AppLayout from "@/components/AppLayout";
import React, { useEffect, useRef } from "react";

function index() {
  const inputRef = useRef();
  useEffect(() => {
    // inputRef.current.focus();
  }, []);
  return (
    <AppLayout>
      <div className="min-h-full ">
        <div className="flex h-[260px] justify-center bg-[url('/carrentals.svg')] bg-cover bg-center bg-no-repeat">
          <h1 className="py-[35px] text-xl font-extrabold text-[#F8A76B]">
            Car rentals
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pb-40 pt-14 ">
          <input
            // ref={inputRef}
            type="text"
            placeholder="Date of rental "
            className="flight-input"
          />
          <input
            type="text"
            placeholder="Name of company"
            className="flight-input"
          />

          <input
            type="text"
            placeholder="Type of vehicle"
            className="flight-input"
          />

          <button className="btn-save">Save</button>
        </div>
      </div>
    </AppLayout>
  );
}

export default index;
