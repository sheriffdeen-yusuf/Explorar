import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

function Signin() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [did, setDid] = useState("");
  const naviagte = useRouter();

  function handleClick() {
    if (did.length === 0) {
      naviagte.replace("/home");
    }
    // theyll be some actions to verify the did
    naviagte.replace("/home");
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className="flex min-h-screen justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/sign.svg')" }}
    >
      <div className="flex w-full flex-col justify-around bg-black bg-opacity-5 p-1 text-center text-white">
        <h1 className="text-shadow mb-4 text-2xl font-bold">
          Get started and plan your trips!
        </h1>
        <div className="flex flex-col justify-center gap-6">
          <div className="mr-2 rounded-md bg-white bg-opacity-50 px-8 py-1 text-left text-[#2F0808]">
            Insert DID
          </div>
          <input
            type="text"
            onChange={(e) => setDid(e.target.value)}
            value={did}
            ref={inputRef}
            className="mr-2 rounded-md bg-white bg-opacity-50 px-8 py-1 text-[#2F0808]"
          />
          <button
            onClick={handleClick}
            className="mx-auto h-[48px] min-w-[136px] rounded-md bg-white bg-opacity-50 px-4 py-2 text-[#2F0808]"
          >
            {did.length > 0 ? "Submit" : "Continue without a DID"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
