import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';

function profile() {
  return (
    <AppLayout>
                <div className=''>

{/* back arrow */}
<div>
    <Image
        src="/goBack.svg"
        height={30}
        width={30}
        className="m-3"
        alt="icon-home"
    />
</div>

{/* Main body of the profile page */}
<div className='flex flex-col items-center justify-center'>

    {/* Profile picture and name */}
    <h3 className='font-bold text-[#441414]'>Profile</h3>
    <Image
        src="/Ellipse 1.svg"
        height={106}
        width={140}
        className='my-3'
        alt='profile-picture'
    />
    <h3 className='font-bold text-[#441414]'>Lily Damisa</h3>

    {/* Buttons */}
    <div className='my-5'>
        <Link href="">
            <button className="button-minor my-5">
                <Image 
                    src="/profileIcon.svg"
                    height={20}
                    width={20}
                    className='me-3'
                    alt='profile-picture'
                /> Personal Information
            </button>
        </Link>

        <Link href="">
            <button className="button-minor my-5">
                <Image 
                    src="/settings.svg"
                    height={20}
                    width={20}
                    className='me-3'
                    alt='profile-picture'
                /> Settings
            </button>
        </Link>

        <Link href="">
            <button className="button-minor my-5">
                <Image 
                    src="/notificationBell.svg"
                    height={20}
                    width={20}
                    className='me-3'
                    alt='profile-picture'
                /> Notifications
            </button>
        </Link>

        <Link href="">
            <button className="button-minor my-5">
                <Image 
                    src="/update.svg"
                    height={20}
                    width={20}
                    className='me-3'
                    alt='profile-picture'
                /> Updates
            </button>
        </Link>


    </div>

</div>
</div>

    </AppLayout>
  );
}

export default profile;