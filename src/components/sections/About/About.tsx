import React from "react"
import { aboutList } from "@/data/aboutList"

export const About = () => {
    return(
        <div className=" flex flex-col justify-center items-center gap-6 ">
            <h2 className=" font-semibold text-3xl">A Propos</h2>
            <div className="lg:grid-cols-4 md:grid-cols-2 md:grid-rows-2 grid justify-center items-center gap-6 p-3">
                {
                    aboutList.map((item,index) => (
                        <div key={index} className=" border col-span-1 md:grid-rows-1 border-black py-3 px-5 rounded-tl-3xl rounded-br-3xl  flex flex-col gap-2">
                            <h5 className=" font-semibold text-2xl">{item.tittle}</h5>
                            <p className=" text-sm ">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}