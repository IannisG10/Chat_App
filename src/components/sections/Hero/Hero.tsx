import React from "react"
import Image from "next/image"
import { HeroSectionType } from "@/entities/compoent-entities/hero-entities"

export const Hero = ({titleHero,description,buttonContent}: HeroSectionType)=> {
    return(
        <section className=" flex md:justify-around justify-center items-center md:py-5 py-3 md:my-4 my-2">
            <div className=" flex flex-col md:w-1/3 w-9/12 gap-4 items-center my-6 mx-4 ">
                <h1 className=" text-center md:font-normal font-medium md:text-5xl text-4xl">{titleHero}</h1>
                <p className=" text-center md:text-xs text-sm text-gray-700 ">{description}</p>
                <button className="bg-[#e7ab4bf7] hover:bg-[#d6a049f7] transition-all duration-150 ease-in-out py-1.5 md:px-1 px-2 text-sm rounded-3xl md:w-1/3 w-3/7 md:font-semibold font-bold">{buttonContent}</button>
            </div>
            <div>
                <Image 
                    src="/img/lootie-1.jpeg"
                    alt="lootie 1"
                    width={200}
                    height={250}
                    className="md:block hidden"
                />
            </div>
        </section>
    )
}