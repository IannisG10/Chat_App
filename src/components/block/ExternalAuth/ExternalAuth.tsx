import React from "react"
import Image from "next/image"
import { ExternalAuthProps } from "./ExternalAuth.types"

export const ExternalAuth = ({authTittle,src,alt}: ExternalAuthProps) => {
    return(
        <div className=" flex justify-center  items-center p-1.5 cursor-pointer hover:bg-gray-50 hover:border-gray-800 hover:opacity-90 gap-1 w-full border border-black rounded-xl">
            <Image
                src={src}
                alt={alt}
                width={30}
                height={30}
            />
            <span className=" font-semibold">{authTittle}</span>
        </div>
    )
}