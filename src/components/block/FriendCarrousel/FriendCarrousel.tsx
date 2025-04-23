import React from "react";
import { BiChevronLeft,BiChevronRight} from "react-icons/bi"
import { userList } from "@/data/userList";
import Image from "next/image";
export const FriendCarrousel = ()=> {

    const friend = userList.slice(0,6)
    return(
        <div className=" flex flex-col justify-center items-center gap-8">
            <h1 className=" font-semibold text-2xl">Suggestions d ami(e)s</h1>
            <div className=" flex items-center gap-2">
                <BiChevronLeft size={36} className=" md:block hidden p-1 transition-all duration-150 cursor-pointer hover:bg-gray-50 rounded-full"/>
                <div className=" md:flex grid grid-cols-3 grid-rows-2 md:gap-6 gap-3 items-center">
                    {friend.map((item,index) => (
                        <div key={index}
                        className=" flex flex-col gap-2 col-span-1 row-span-1 border border-gray-900 p-2 rounded-lg">
                            <Image
                                 src={item.profileImage}
                                 alt="photo de profil"
                                 width={100}
                                 height={50}
                                 className=" w-full rounded-md"
                            />
                            <span className=" flex justify-start font-semibold">{item.username}</span>
                            <button className=" font-semibold bg-[#1260e6] hover:bg-[#2466ebf7] p-0.5 rounded-md">Discuter</button>
                        </div>
                    ))}
                </div>
                <BiChevronRight className=" md:block hidden p-1 transition-all duration-150 cursor-pointer hover:bg-gray-50 rounded-full" size={36}/>
            </div>
            <button className=" text-sm px-5 py-1.5 border font-semibold border-black rounded-3xl 
                hover:bg-gray-50 hover:border-gray-700 transition-all duration-150"  >Voir plus
            </button>
        </div>
    )
}