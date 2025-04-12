import React from "react";
import {BiSearch} from "react-icons/bi"
export const SearchBarConversation = ()=> {
    return(
        <div className=" flex items-center w-full border-b border-gray-200">
            <BiSearch size={22}/>
            <input type="text" placeholder="Rechercher une conversation" className=" border-none w-3/4 outline-none p-2" />
        </div>
    )
}