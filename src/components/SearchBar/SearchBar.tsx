import React from "react"

import {BiSearch,BiSolidMoon} from "react-icons/bi"

export const SearchBar = ()=> {
    return(
        <div className=" flex items-center bg-[#2c2c2c] px-2 w-1/4 rounded-3xl">
            <BiSearch size={25} color="white"/>
            <input type="text" 
            className=" text-white outline-none w-full border-none placeholder-[#c8c8c8] bg-[#2c2c2c] p-2"
            placeholder="Rechercher une personne"
            />
            <div className=" rounded-full p-1 hover:bg-[#535353] transition-all duration-150 cursor-pointer">
                <BiSolidMoon size={25} color="white"/>
            </div>
        </div>
    )
}