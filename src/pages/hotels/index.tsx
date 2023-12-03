import AppLayout from "@/components/AppLayout";
import React, { useEffect, useRef } from "react";

function index() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <AppLayout>
      <div className="min-h-full  bg-slate-200 bg-gradient-to-b  from-slate-200 to-[#481f0199]">
        <div
          className="flex h-[260px] justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/room.png')" }}
        >
          <h1 className="py-[35px] text-xl font-extrabold text-[#441414]">
            Hotels
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pb-40 pt-14 ">
          <input
            ref={inputRef}
            type="text"
            placeholder="Date  "
            className="flight-input"
          />
          <input
            type="text"
            placeholder="Hotel name "
            className="flight-input"
          />

          <input
            type="text"
            placeholder="Time booked "
            className="flight-input"
          />
          <input
            type="text"
            placeholder="Period of stay "
            className="flight-input"
          />
          <button className="btn-save">Save</button>
        </div>
      </div>
    </AppLayout>
  );
}

export default index;
