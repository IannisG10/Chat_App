import React from "react"
import { userList } from "@/data/userList"
import Image from "next/image"

export const FriendSuggestion = () => {
    return(
       <div className='flex flex-col justify-center items-center p-2'>
            <div className="grid grid-cols-4 grid-rows-4 w-3/4 gap-8 p-5 mt-2">
                {
                    userList.map((item,index) => (
                        <div key={index}
                            className=" flex flex-col gap-2 col-span-1 row-span-1 border border-gray-900 p-2 rounded-lg"
                        >
                            <Image
                                src={item.photoUrl}
                                alt="photo de profil"
                                width={200}
                                height={80}
                                className=" w-full"
                            />
                            <span className=" flex justify-start font-semibold">{item.name} {item.lastname}</span>
                            <button className=" font-semibold bg-[#1260e6] hover:bg-[#2466ebf7] p-0.5 rounded-md">Discuter</button>
                        </div>
                    ))
                }
            </div>
       </div>
    )
}