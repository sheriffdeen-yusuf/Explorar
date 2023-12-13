import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

function Signin() {
  const { handleCopyDid, didCopied } = useAppContext();
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
    <div className="flex min-h-screen justify-center bg-[url('/sign.svg')] bg-cover bg-center md:bg-[url('/signLarge.jpg')]">
      <div className="flex w-full flex-col justify-around bg-black bg-opacity-5 p-1 text-center text-white">
        <h1 className="text-shadow mb-4 text-2xl font-bold md:text-5xl">
          Get started and plan your trips!
        </h1>
        <div className="mx-auto flex flex-col justify-center gap-6 md:w-1/2">
          {/* <div className="mr-2 rounded-md bg-white bg-opacity-50 px-8 py-1 text-left text-[#2F0808]">
            Insert DID
          </div> */}
          <input
            type="text"
            onChange={(e) => setDid(e.target.value)}
            value={did}
            placeholder="Enter recipient DID..."
            ref={inputRef}
            className="mr-2 rounded-md bg-white bg-opacity-50 px-8 py-3 text-[#2F0808] placeholder:text-gray-800"
          />
          <button onClick={handleClick} className="btn-login">
            {did.length > 0 ? "Proceed" : "Continue without recipient DID"}
          </button>
          <button onClick={handleCopyDid} className="btn-login">
            copy myDID
          </button>
          {didCopied && <p>DID copied to clipboard!</p>}
        </div>
      </div>
    </div>
  );
}

export default Signin;
