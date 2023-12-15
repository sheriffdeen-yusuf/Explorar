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
    fromLocation: "",
    toDestination: "",
    airport: "",
    timeOfDeparture: "",
    flightClass: "",
    passengerNo: "",
  });

  function handleChnage(e: any) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleFlightFormSubmission(e: any) {
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
        <div className="flex h-[260px] justify-center bg-[url('/plane.png')] bg-cover bg-center md:min-h-screen md:w-[55%] md:bg-[url('/planeLarge.png')]">
          <h1 className="py-[35px] text-xl font-extrabold text-[#441414] md:hidden">
            Flights
          </h1>
        </div>
        <form
          method="POST"
          className="mx-auto flex flex-col items-center justify-center gap-4 pb-40 pt-14 md:pb-10 "
        >
          <h3 className="mb-4 hidden text-3xl font-bold text-[#441414] md:block">
            {" "}
            Flights
          </h3>
          <input
            ref={inputRef}
            type="text"
            name="fromLocation"
            value={formData.fromLocation}
            onChange={handleChnage}
            placeholder="From  "
            className="flight-input"
          />
          <input
            type="text"
            name="toDestination"
            value={formData.toDestination}
            onChange={handleChnage}
            placeholder="To "
            className="flight-input"
          />
          <input
            type="text"
            name="airport"
            value={formData.airport}
            onChange={handleChnage}
            placeholder="Airport "
            className="flight-input"
          />
          <input
            type="text"
            name="timeOfDeparture"
            value={formData.timeOfDeparture}
            onChange={handleChnage}
            placeholder="Time of departure "
            className="flight-input"
          />
          <input
            type="text"
            name="flightClass"
            value={formData.flightClass}
            onChange={handleChnage}
            placeholder="Class "
            className="flight-input"
          />
          <input
            type="text"
            name="passengerNo"
            value={formData.passengerNo}
            onChange={handleChnage}
            placeholder="Passengers "
            className="flight-input"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`btn-save disabled:cursor-not-allowed disabled:opacity-50`}
            onClick={(e) => handleFlightFormSubmission(e)}
          >
            {submitStatus === "" ? "submit" : submitStatus}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export default index;
