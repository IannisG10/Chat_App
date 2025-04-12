import React from "react";
import {BiPaperclip,BiFace} from "react-icons/bi"


export const InputMessage = () => {
    return(
        <div className=" flex items-center gap-2 w-full">
            <input type="text" placeholder="Tapez un message..." className="w-full outline-none border border-black rounded-3xl p-2" />
            <div className=" flex items-center gap-2">
                <BiFace size={25}/>
                <BiPaperclip size={25}/>
            </div>
            <button className="bg-[#3f75f2] hover:bg-[#3a70ef] transition-all duration-150 ease-in-out px-4 py-2 rounded-3xl text-gray-50 font-semibold">Envoyer</button>
        </div>
    )
}