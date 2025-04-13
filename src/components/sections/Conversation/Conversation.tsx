import React from "react";
import Image from "next/image";
import { messageList } from "@/data/messageList";
import { InputMessage } from "../../block/Input/InputMessage";

export const Conversation = ()=>{
    const conversation = messageList.slice(0,4)
    return(
        <div className=" flex flex-col flex-1 justify-between bg-white h-full rounded-xl px-5 py-3">
            <div className=" flex items-center gap-1 border-b border-gray-300 px-2 py-3">
                <Image src="/img/userprofile.jpeg"
                    alt="profile phot"
                    width={50}
                    height={50}
                    className=" rounded-full"
                />
                <div className=" flex flex-col">
                    <span className=" text-sm font-semibold">Mario Ralison</span>
                    <span className=" text-gray-400 text-xs font-medium">En ligne</span>
                </div>
            </div>
            <div className=" flex flex-col gap-2 px-1">
                {conversation.map((item,index) => (
                    <div key={index} className={` flex  `}>
                        <div  className={`  p-2 bg-[#99bbf1] w-fit rounded-t-xl rounded-br-xl text-black   `}>
                            {item.message}
                        </div>
                        <div className=" text-xs flex flex-col justify-end py-1 px-0.5 text-gray-500 ">
                            {item.timeStamp}
                        </div>
                    </div>
                ))}
            </div>
            <InputMessage/>
        </div>
    )
}