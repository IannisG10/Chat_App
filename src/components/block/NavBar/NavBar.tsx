"use client"
import React from "react";
import { BiSolidMoon } from "react-icons/bi"
import { NavBarType } from "./NavBar.types";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavBar = ({firstItem,secondItem,thirdItem}: NavBarType) => {
    const path = usePathname();

    return(
        <nav className="flex items-center justify-around bg-[#2c2c2c] md:w-1/4 w-11/12  rounded-3xl">
            <ul className=" flex text-white justify-between md:w-3/4 w-full  ">
                <Link href="" className={`cursor-pointer hover:bg-[#535353] transition-all duration-150 md:py-2 py-1.5 md:text-base text-sm rounded-3xl px-2 ${path === "/" && "bg-[#535353]"}`} >
                        {firstItem}
                </Link>
                <Link href="" className={`cursor-pointer hover:bg-[#535353] transition-all duration-150 md:py-2 py-1.5 md:text-base text-sm rounded-3xl px-2 ${path === ""}`} >
                        {secondItem}
                </Link>
                <Link href="" className={`cursor-pointer hover:bg-[#535353] transition-all duration-150 md:py-2 py-1.5 md:text-base text-sm rounded-3xl px-2 ${path === ""}`} >
                        {thirdItem}
                </Link>
            </ul>
            <div className="md:block hidden rounded-full p-1 hover:bg-[#535353] transition-all duration-150 cursor-pointer">
                <BiSolidMoon color="white" size={25}/>
            </div>
        </nav>
    )
}
