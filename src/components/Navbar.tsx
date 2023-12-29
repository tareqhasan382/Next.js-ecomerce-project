"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BiSolidUpArrow } from "react-icons/bi";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
type Props = {};
const Navbar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  //=========auth login========
  const { data: session } = useSession();
  //console.log("session user role:", session?.user?.role);
  const Logout = () => {
    if (session && session?.user) {
      return (
        <ul className=" py-5 px-1 text-neutral-600 shadow-xl w-[150px] rounded ">
          <li className=" hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer  ">
            {session?.user?.name}
          </li>
          <li
            onClick={() => signOut()}
            className=" whitespace-nowrap text-red-600 hover:text-red-500 hover:bg-gray-100 duration-300  px-5 py-2 cursor-pointer "
          >
            Sign Out
          </li>
          <li className=" whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer ">
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      );
    }
    return (
      <ul>
        <li
          onClick={() => signIn()}
          className=" whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer "
        >
          Sign In
        </li>
      </ul>
    );
  };
  return (
    <div className="px-5 max-w-[1280px] mx-auto">
      <div className="flex items-center justify-between py-4 relative  ">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <Link href="/">Quiz App</Link>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
              <li>
                <Link
                  href="/"
                  className="py-3 inline-block w-full hover:text-orange-700 opacity-100"
                >
                  Programming Hero
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="py-3 inline-block w-full hover:text-orange-500 opacity-100"
                >
                  Filters
                </Link>
              </li>
              {session?.user && (
                <li>
                  <Link
                    href="/"
                    className="py-3 inline-block w-full hover:text-orange-700 opacity-100"
                  >
                    My Profile
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          >
            {session?.user.image ? (
              <div className=" flex items-center gap-2 ">
                <p className=" font-semibold text-sm lg:text-lg ">
                  {session?.user?.name}
                </p>
                <Image
                  src={session?.user?.image}
                  height={40}
                  width={40}
                  alt="img"
                  className=" rounded-full "
                />
              </div>
            ) : (
              <FaCircleUser size={30} />
            )}

            <div
              className={`absolute bg-white z-[2] rounded-lg shadow-lg ${
                showProfile ? "" : "hidden"
              }`}
            >
              <Logout />
              {/* <Link href="/signin">SignIn</Link> */}
            </div>
          </div>

          <Link href="/">
            <div className="p-2 bg-gray-100 rounded-full">
              <MdOutlineShoppingCart size={20} />
            </div>
          </Link>

          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-gray-100 rounded-full md:hidden"
          >
            <BiSolidUpArrow
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav
            ? "pb-4 px-5 bg-slate-300 rounded-lg "
            : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2 ">
          <li>
            <Link href="/" className="py-3 inline-block w-full ">
              Quiz App
            </Link>
          </li>
          <li>
            <Link
              href="/filters"
              className="py-3 inline-block w-full hover:text-orange-700 opacity-100 "
            >
              Programming Hero
            </Link>
          </li>
          {session?.user && (
            <li>
              <Link
                href="/"
                className="py-3 inline-block w-full hover:text-orange-700 opacity-100"
              >
                My Profile
              </Link>
            </li>
          )}
        </ul>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
          <input
            type="text"
            className="outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <CiSearch size={20} className="opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
