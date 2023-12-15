import AppLayout from "@/components/AppLayout";
import { useAppContext } from "@/context/AppContext";
import React from "react";

function listedItem() {
  const { fetchFlightMessages } = useAppContext();
  return (
    <AppLayout>
      <h2 className="mt-4 text-center text-xl font-bold text-[#441414] md:mt-1 md:text-3xl">
        Flights Listed Items
      </h2>
      <button
        onClick={fetchFlightMessages}
        className="btn-action mx-auto flex w-max items-center  justify-center bg-[#481f0199] px-2"
      >
        Fetch flights items{" "}
      </button>

      <div className="mt-8 space-y-14 px-6 py-8 pb-32 md:px-10">
        {/* item 1 */}
        <div className="grid content-end justify-items-end gap-3 md:grid-cols-12 md:gap-0 ">
          <div className="col-span-8 flex h-[60px] w-full items-center rounded-md  bg-[#D9D9D9] px-2">
            <h2 className=" font-semibold text-[#481F01]">
              150 Piccadilly, St. James's, London W1J 9BR, United Kingdom
            </h2>
          </div>
          <div className="col-span-4 flex space-x-2">
            <button className="btn-action bg-[#481f0199]  ">Edit</button>
            <button className="btn-action bg-[#28DF71]">Save</button>
            <button className="btn-action bg-[#DF2828]">Delete</button>
          </div>
        </div>

        {/* item 2 */}
        <div className="grid content-end justify-items-end gap-3 md:grid-cols-12 md:gap-0 ">
          <div className="col-span-8 flex h-[60px] w-full items-center rounded-md  bg-[#D9D9D9] px-2">
            <h2 className=" font-semibold text-[#481F01]">
              150 Piccadilly, St. James's, London W1J 9BR, United Kingdom
            </h2>
          </div>
          <div className="col-span-4 flex space-x-2">
            <button className="btn-action bg-[#481f0199] ">Edit</button>
            <button className="btn-action bg-[#28DF71]">Save</button>
            <button className="btn-action bg-[#DF2828]">Delete</button>
          </div>
        </div>

        {/* item3 */}
        <div className="grid content-end justify-items-end gap-3 md:grid-cols-12 md:gap-0 ">
          <div className="col-span-8 flex h-[60px] w-full items-center rounded-md  bg-[#D9D9D9] px-2">
            <h2 className=" font-semibold text-[#481F01]">
              150 Piccadilly, St. James's, London W1J 9BR, United Kingdom
            </h2>
          </div>
          <div className="col-span-4 flex space-x-2">
            <button className="btn-action bg-[#481f0199] ">Edit</button>
            <button className="btn-action bg-[#28DF71]">Save</button>
            <button className="btn-action bg-[#DF2828]">Delete</button>
          </div>
        </div>
        {/* item 4 */}
        <div className="grid content-end justify-items-end gap-3 md:grid-cols-12 md:gap-0 ">
          <div className="col-span-8 flex h-[60px] w-full items-center rounded-md  bg-[#D9D9D9] px-2">
            <h2 className=" font-semibold text-[#481F01]">
              150 Piccadilly, St. James's, London W1J 9BR, United Kingdom
            </h2>
          </div>
          <div className="col-span-4 flex space-x-2">
            <button className="btn-action bg-[#481f0199] ">Edit</button>
            <button className="btn-action bg-[#28DF71]">Save</button>
            <button className="btn-action bg-[#DF2828]">Delete</button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default listedItem;
