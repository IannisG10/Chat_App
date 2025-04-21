import React from "react"
import { userList } from "@/data/userList"
import Image from "next/image"

export const FriendSuggestion = () => {
    return(
       <div className='flex justify-center w-full items-center md:p-2 p-1'>
            <div className="grid grid-cols-4 grid-rows-4 w-3/4 md:gap-8 gap-4 p-5 mt-2">
                {
                    userList.map((item,index) => (
                        <div key={index}
                            className=" flex flex-col gap-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1 border border-gray-900 p-2 rounded-lg"
                        >
                            <Image
                                src={item.photoUrl}
                                alt="photo de profil"
                                width={200}
                                height={80}
                                className=" w-full rounded-md"
                            />
                            <span className=" flex justify-start font-semibold">{item.name} {item.lastname}</span>
                            <button className=" font-semibold bg-[#1260e6] hover:bg-[#2466ebf7] p-0.5 rounded-md md:text-base text-sm">Discuter</button>
                        </div>
                    ))
                }
            </div>
       </div>
    )
}