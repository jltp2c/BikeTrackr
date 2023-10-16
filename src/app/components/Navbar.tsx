import React from "react";
import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();

  return (
    <nav className="block w-screen">
      <div className="h-20 bg-gray-400 flex justify-end items-center">
        <div className="flex items-center justify-between w-screen m-4 my-auto gap-10">
          <div>
            <h1 className="text-xl">BikeTrackr.</h1>
          </div>
          <div className="flex justify-center items-center gap-10">
            {!userId && (
              <>
                <Link
                  href="sign-up"
                  className="border-2 p-2 rounded-md text-xs w-24 sm:w-32 text-center font-bold hover:text-green-600 hover:border-green-600 hover:scale-110 transition-all">
                  Inscription
                </Link>
                <Link
                  href="sign-in"
                  className="border-2 p-2 rounded-md text-xs w-24 sm:w-32  text-center font-bold hover:text-green-600 hover:border-green-600 hover:scale-110 transition-all">
                  Connecte-toi
                </Link>
              </>
            )}
            {userId && (
              <Link href="profile" className="hover:text-white">
                Profile
              </Link>
            )}
            <div className="ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
