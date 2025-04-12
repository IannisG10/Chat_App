import React from "react";
import Image from "next/image";
import { SearchBarConversation } from "@/components/SearchBar/SearchBarConversation";
import { messageList } from "@/data/messageList";
import {BiCheckCircle,BiSolidCheckCircle} from "react-icons/bi"
import styles from "@/lib/scrollbar.module.css"

export const SideMessageList = ()=> {
    return(
        <div className=" w-1/4 bg-white h-full flex flex-col items-center pl-4 pr-1.5 pt-2 rounded-xl">
            <SearchBarConversation/>
            <div className={`overflow-y-auto flex flex-col items-center gap-6 w-full pt-4 ${styles.scrollbar}`}>
                {messageList.map((item,index) => (
                    <div key={index} className=" flex items-center cursor-pointer transition-all duration-150 ease-in-out hover:bg-gray-100 p-1 w-full gap-1">
                        <div>
                            <Image
                                src={item.sender.photoUrl}
                                alt={item.sender.name}
                                width={50}
                                height={50}
                                className=" rounded-full"
                            />
                        </div>
                        <div className=" flex flex-col w-full">
                            <div className=" flex items-center justify-between">
                                <h5 className=" font-semibold text-sm">{item.sender.name} {item.sender.lastname}</h5>
                                <span className=" text-xs text-gray-400">{item.timeStamp}</span>
                            </div>
                            <div className=" flex items-center justify-between">
                                <span className=" text-gray-600 text-sm">{item.message}</span>
                                { item.isReceie ? <BiCheckCircle color="#c2c2c2"/> : <BiSolidCheckCircle color="#c2c2c2"/>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}