import React from "react";
import { BiSolidMoon } from "react-icons/bi"
import { NavBarType } from "@/entities/compoent-entities/header-entities";

export const NavBar = ({firstItem,secondItem,thirdItem}: NavBarType) => {
    return(
        <nav className="flex items-center justify-around bg-[#2c2c2c] md:w-1/4 w-3/5  rounded-3xl">
            <ul className=" flex text-white justify-between w-3/4  ">
                <li className=" cursor-pointer hover:bg-[#535353] transition-all duration-150 md:py-2 py-1.5 rounded-3xl px-2" >{firstItem}</li>
                <li className=" cursor-pointer hover:bg-[#535353] transition-all duration-150 md:py-2 py-1.5 rounded-3xl px-2" >{secondItem}</li>
                <li className=" cursor-pointer hover:bg-[#535353] transition-all duration-150 md:py-2 py-1.5 rounded-3xl px-2" >{thirdItem}</li>
            </ul>
            <div className=" rounded-full p-1 hover:bg-[#535353] transition-all duration-150 cursor-pointer">
                <BiSolidMoon color="white" size={25}/>
            </div>
        </nav>
    )
}