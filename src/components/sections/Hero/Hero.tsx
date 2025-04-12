import React from "react"
import Image from "next/image"
import { HeroSectionType } from "@/entities/compoent-entities/hero-entities"

export const Hero = ({titleHero,description,buttonContent}: HeroSectionType)=> {
    return(
        <div className=" flex justify-around items-center py-5 my-4">
            <div className=" flex flex-col w-1/3 gap-4 items-center my-6 mx-4 ">
                <h1 className=" text-center font-normal text-5xl">{titleHero}</h1>
                <p className=" text-center text-xs text-gray-700 ">{description}</p>
                <button className="bg-[#e7ab4bf7] hover:bg-[#d6a049f7] transition-all duration-150 ease-in-out py-1.5 px-1 text-sm rounded-3xl w-1/3 font-semibold">{buttonContent}</button>
            </div>
            <div>
                <Image 
                    src="/img/lootie-1.jpeg"
                    alt="lootie 1"
                    width={200}
                    height={250}
                />
            </div>
        </div>
    )
}