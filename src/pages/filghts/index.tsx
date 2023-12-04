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
        <div
          className="flex h-[260px] justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/plane.png')" }}
        >
          <h1 className="py-[35px] text-xl font-extrabold text-[#441414]">
            Flights
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pb-40 pt-14 ">
          <div className="h-[35px] w-[240px] rounded-md bg-[#481f0199]   text-center text-white">
            Date of Booking
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="From  "
            className="flight-input"
          />
          <input type="text" placeholder="To " className="flight-input" />
          <input type="text" placeholder="Airport " className="flight-input" />
          <input
            type="text"
            placeholder="Time of departure "
            className="flight-input"
          />
          <input type="text" placeholder="Class " className="flight-input" />
          <input
            type="text"
            placeholder="Passengers "
            className="flight-input"
          />
          <button className="btn-save">Save</button>
        </div>
      </div>
    </AppLayout>
  );
}

export default index;
