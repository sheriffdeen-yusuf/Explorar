import AppLayout from "@/components/AppLayout";
import React, { useEffect, useRef } from "react";

function index() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <AppLayout>
      <div className="flex min-h-full flex-col  md:flex-row md:justify-between  ">
        <div className="flex h-[260px] justify-center bg-[url('/room.png')] bg-cover bg-center md:min-h-screen md:w-[55%] md:bg-[url('/roomLarge.png')]">
          <h1 className="py-[35px] text-xl font-extrabold text-[#441414] md:hidden">
            Hotels
          </h1>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-4 pb-40 pt-14 md:pb-10 ">
          <h3 className="mb-4 hidden text-3xl font-bold text-[#441414] md:block">
            {" "}
            Hotels
          </h3>
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
