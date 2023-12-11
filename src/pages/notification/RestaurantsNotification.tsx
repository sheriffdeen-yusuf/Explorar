import AppLayout from "@/components/AppLayout";
import React from "react";

function RestaurantsNotification() {
  return (
    <AppLayout>
      <div className="px-6 py-4  md:px-14  md:py-6">
        <h2 className="mt-4 text-center text-xl font-bold text-[#441414] md:mt-1 md:text-3xl">
          Restaurants Notifications
        </h2>
        <div className="mx-auto mt-14 w-[80%] space-y-6 md:space-y-10">
          <div className="flex items-center rounded-md border border-[#441414] px-4 py-4 md:px-12">
            <li className="font-semibold text-[#441414] md:text-xl ">
              Changes made has been notified to The Ritz restaurants.
            </li>
          </div>
          {/* item 2 */}
          <div className="flex items-center rounded-md border border-[#441414] px-4 py-4 md:px-12">
            <li className="font-semibold text-[#441414] md:text-xl ">
              Manager The Ritz restaurants : “Sorry for your flight delay, we
              have reserved your room, cant wait to have you!{" "}
            </li>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default RestaurantsNotification;
