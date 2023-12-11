import AppLayout from "@/components/AppLayout";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function index() {
  const { didCopied, handleCopyDid } = useAppContext();
  const [edit, setEdit] = useState(false);
  const [profileName, setProfileName] = useState("");

  function handleSaveProfile(e: any) {
    e.preventDefault();
    if (profileName !== "") {
      localStorage.setItem("profileName", profileName);

      setEdit(false);
    }
  }
  useEffect(() => {
    const storedProfileName = localStorage.getItem("profileName");
    if (storedProfileName) {
      setProfileName(storedProfileName);
    }
  }, []);

  return (
    <AppLayout>
      <div className="mx-auto mt-8 md:mt-16 ">
        {/* profile picture */}
        <div className="flex flex-col space-y-2 text-center text-sm font-bold text-[#441414] md:text-2xl">
          <h1 className="">Profile</h1>
          <Image
            src="/avatar.png"
            height={150}
            width={150}
            alt="avatar"
            className="mx-auto"
          />
          <h1>{profileName ? profileName : "Default User"}</h1>
        </div>

        {/* buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-6 pb-20">
          <button
            onClick={() => setEdit((edit) => !edit)}
            className="button-main flex items-center gap-2 md:w-[400px] "
          >
            <Image
              src="/user-icon.svg"
              height={50}
              width={50}
              alt="icon"
              className=""
            />{" "}
            Edit Personalinformation
          </button>
          {edit && (
            <div className="flex  gap-2">
              <form onSubmit={handleSaveProfile}>
                <input
                  onChange={(e) => setProfileName(e.target.value)}
                  value={profileName}
                  type="text"
                  placeholder="FirstName,  lastName "
                  className="flight-input"
                />
              </form>
              <button
                onClick={handleSaveProfile}
                type="submit"
                className="btn-action bg-[#481f0199]"
              >
                Save
              </button>
            </div>
          )}

          {/* item 2 */}
          <Link href="/profile">
            <button className="button-main flex items-center gap-2 md:w-[400px] ">
              <Image
                src="/gear-icon.svg"
                height={50}
                width={50}
                alt="icon"
                className=""
              />{" "}
              Settings
            </button>
          </Link>

          <button
            onClick={handleCopyDid}
            className="button-main flex items-center gap-2 md:w-[400px] "
          >
            <Image
              src="/copy-icon.svg"
              height={50}
              width={50}
              alt="icon"
              className=""
            />{" "}
            copy myDID
          </button>
          {didCopied && <p>Copied to clipboard!</p>}

          {/* item3  */}
          <Link href="/notification">
            <button className="button-main flex items-center gap-2 md:w-[400px] ">
              <Image
                src="/bell-icon.svg"
                height={50}
                width={50}
                alt="icon"
                className=""
              />{" "}
              Notifications
            </button>
          </Link>
          {/* item4 */}
          <Link href="/profile">
            <button className="button-main flex items-center gap-2 md:w-[400px] ">
              <Image
                src="/update-icon.svg"
                height={50}
                width={50}
                alt="icon"
                className=""
              />{" "}
              Updates
            </button>
          </Link>
          {/* item 5 */}
          <Link href="/filghts/listedItems">
            <button className="button-main flex items-center gap-2 md:w-[400px] ">
              <Image
                src="/user-icon.svg"
                height={50}
                width={50}
                alt="icon"
                className=""
              />{" "}
              Listed Items
            </button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}

export default index;
