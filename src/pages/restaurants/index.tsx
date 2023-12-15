import AppLayout from "@/components/AppLayout";
import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useRef, useState } from "react";

function index() {
  const inputRef = useRef();

  const {
    handleSubmit,
    formData: appFormData,
    setFormData: appSetFormData,
    submitStatus,
    isLoading,
  } = useAppContext();
  const [formData, setFormData] = useState({
    restaurnatName: "",
    reservation: "",
    tableType: "",
  });

  function handleChnage(e: any) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleRestaurantFormSubmission(e: any) {
    e.preventDefault();
    const allValueExits = Object.values(formData).every(
      (value) => value !== "",
    );
    if (allValueExits) {
      appSetFormData(formData);
      handleSubmit();
      console.log(formData);
    } else {
      alert("Please fill in all field");
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <AppLayout>
      <div className="flex min-h-full flex-col  md:flex-row md:justify-between  ">
        <div className="flex h-[260px] justify-center bg-[url('/restaurantbg.svg')] bg-cover bg-center md:min-h-screen md:w-[55%] md:bg-[url('/restaurantLarge.png')]">
          <h1 className="py-[35px] text-xl font-extrabold text-[#F4E7DE] md:hidden">
            Restaurants
          </h1>
        </div>
        <form className="mx-auto flex flex-col items-center justify-center gap-4 pb-40 pt-14 md:pb-10 ">
          <h3 className="mb-4 hidden text-3xl font-bold text-[#441414] md:block">
            {" "}
            Restaurants
          </h3>
          <input
            ref={inputRef}
            type="text"
            name="restaurnatName"
            value={formData.restaurnatName}
            onChange={handleChnage}
            placeholder="Restaurant name "
            className="flight-input"
          />
          <input
            type="text"
            name="reservation"
            value={formData.reservation}
            onChange={handleChnage}
            placeholder="Reservation for"
            className="flight-input"
          />

          <input
            type="text"
            name="tableType"
            value={formData.tableType}
            onChange={handleChnage}
            placeholder="Table for"
            className="flight-input"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`btn-save disabled:cursor-not-allowed disabled:opacity-50`}
            onClick={(e) => handleRestaurantFormSubmission(e)}
          >
            {submitStatus === "" ? "submit" : submitStatus}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export default index;
