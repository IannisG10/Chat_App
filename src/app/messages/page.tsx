import React from "react";
import { MessageHeader } from "@/components/sections/Header/MessageHeader";
import { SideMessageList } from "./SideMessageList";
import { Conversation } from "./Conversation";

export default function Message(){
    return(
        <div className=" flex flex-col h-screen gap-3 bg-[#e8e8e8] p-2">
            <MessageHeader/>
            <div className=" flex gap-2 h-full">
                <SideMessageList/>
                <Conversation/> 
            </div>
        </div>
    )
}