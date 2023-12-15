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
    date: "",
    companyName: "",
    typeOfVehicle: "",
  });

  function handleChnage(e: any) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleCarrentalsFormSubmission(e: any) {
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
        <div className="flex h-[260px] justify-center bg-[url('/carrentals.svg')] bg-cover bg-center md:min-h-screen md:w-[55%] md:bg-[url('/carrentalsLarge.png')]">
          <h1 className="py-[35px] text-xl font-extrabold text-[#F8A76B] md:hidden">
            Car rentals
          </h1>
        </div>
        <form className="mx-auto flex flex-col items-center justify-center gap-4 pb-40 pt-14 md:pb-10 ">
          <h3 className="mb-4 hidden text-3xl font-bold text-[#441414] md:block">
            {" "}
            Car Rentals
          </h3>
          <input
            ref={inputRef}
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChnage}
            placeholder="Date of rental "
            className="flight-input"
          />
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChnage}
            placeholder="Name of company"
            className="flight-input"
          />

          <input
            type="text"
            name="typeOfVehicle"
            value={formData.typeOfVehicle}
            onChange={handleChnage}
            placeholder="Type of vehicle"
            className="flight-input"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`btn-save disabled:cursor-not-allowed disabled:opacity-50`}
            onClick={(e) => handleCarrentalsFormSubmission(e)}
          >
            {submitStatus === "" ? "submit" : submitStatus}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export default index;
