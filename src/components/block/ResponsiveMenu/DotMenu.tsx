"use client"
import React, { useState } from "react";
import { HeaderProps } from "@/components/sections/Header/Header";
import {BiDotsVertical} from "react-icons/bi"
import styled from "styled-components"
import Link from "next/link";

export const DotMenu = ({iconList}: HeaderProps) => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    return(
        <div className={`md:hidden ${iconList.length === 1 ? "hidden": "block"}`}>
            <div className="relative p-1 z-10 rounded-full cursor-pointer hover:bg-gray-100"
                onClick={()=> {setIsOpen(!isOpen)}}
            >
                    <BiDotsVertical size={22}/>
            </div>
            {isOpen && (
                <div className=" absolute top-14 right-3 z-0 bg-gray-200 p-1 animate-fade-down rounded-full flex flex-col gap-1">
                    {iconList.map((item,index)=>(
                        <Link href={item.href} key={index} className="p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">{item.iconComponent}</Link>
                    ))}
                </div>
                )
            }
        </div>    
    )
}