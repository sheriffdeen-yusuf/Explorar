import React from "react";
import Image from "next/image";

function TopNavigation () {
    return(
        <div className="flex justify-between items-center font-bold mx-10 my-3 invisible md:visible">
            <div className="logo">
                <Image 
                    src="/ExploraLogo.png"
                    height={44}
                    width={168}
                    // className='me-3'
                    alt='logo'
                    />
            </div>

            <div className="navigation">
                <ul className="flex gap-10 justify-around">
                    <li>Home</li>
                    <li>Notifications</li>
                    <li>Search</li>
                    <li>Profile</li>
                </ul>
            </div>

        </div>
    )
}

export default TopNavigation;