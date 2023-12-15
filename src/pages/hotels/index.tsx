import AppLayout from "@/components/AppLayout";
import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useRef, useState } from "react";

function index() {
  const {
    handleSubmit,
    formData: appFormData,
    setFormData: appSetFormData,
    submitStatus,
    isLoading,
  } = useAppContext();
  const [formData, setFormData] = useState({
    date: "",
    hotelName: "",
    timeBooked: "",
    periodOfStay: "",
  });

  function handleChnage(e: any) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleHotelFormSubmission(e: any) {
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
        <form className="mx-auto flex flex-col items-center justify-center gap-4 pb-40 pt-14 md:pb-10 ">
          <h3 className="mb-4 hidden text-3xl font-bold text-[#441414] md:block">
            {" "}
            Hotels
          </h3>
          <input
            ref={inputRef}
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChnage}
            placeholder="Date  "
            className="flight-input"
          />
          <input
            type="text"
            name="hotelName"
            value={formData.hotelName}
            onChange={handleChnage}
            placeholder="Hotel name "
            className="flight-input"
          />

          <input
            type="text"
            name="timeBooked"
            value={formData.timeBooked}
            onChange={handleChnage}
            placeholder="Time booked "
            className="flight-input"
          />
          <input
            type="text"
            name="periodOfStay"
            value={formData.periodOfStay}
            onChange={handleChnage}
            placeholder="Period of stay "
            className="flight-input"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`btn-save disabled:cursor-not-allowed disabled:opacity-50`}
            onClick={(e) => handleHotelFormSubmission(e)}
          >
            {submitStatus === "" ? "submit" : submitStatus}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export default index;
