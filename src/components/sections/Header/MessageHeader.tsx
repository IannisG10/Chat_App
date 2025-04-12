import React from "react";
import {BiChevronLeft} from "react-icons/bi"
import Image from "next/image";
import Link from "next/link";

export const MessageHeader = () => {
    return(
        <div className=" flex justify-between items-center">
            <div className="flex items-center" >
                <Link href="/Home">
                    <BiChevronLeft size={35} className="p-1 cursor-pointer rounded-full hover:bg-gray-50"/>
                </Link>
                <h1 className=" text-2xl font-semibold ">Mes conversations</h1>
            </div>
            <div className=" flex items-center gap-2">
                <Image
                    src="/img/userprofile.jpeg"
                    alt="photo de profile"
                    width={30}
                    height={30}
                    className=" rounded-full"
                />
                <span className="font-semibold text-lg">GUERRA Iannis</span>
            </div>
        </div>
    )
}