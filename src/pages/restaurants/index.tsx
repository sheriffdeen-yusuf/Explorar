import AppLayout from "@/components/AppLayout";
import React, { useEffect, useRef } from "react";

function index() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <AppLayout>
      <div className="min-h-full ">
        <div className="flex h-[260px] justify-center bg-[url('/restaurantbg.svg')] bg-cover bg-center bg-no-repeat">
          <h1 className="py-[35px] text-xl font-extrabold text-[#F4E7DE]">
            Restaurants
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pb-40 pt-14 ">
          <input
            ref={inputRef}
            type="text"
            placeholder="Restaurant name "
            className="flight-input"
          />
          <input
            type="text"
            placeholder="Reservation for"
            className="flight-input"
          />

          <input type="text" placeholder="Table for" className="flight-input" />

          <button className="btn-save">Save</button>
        </div>
      </div>
    </AppLayout>
  );
}

export default index;
