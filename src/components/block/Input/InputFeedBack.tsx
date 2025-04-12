import React from "react"
import { Input } from "@/components/ui/Input"

export const InputFeedBack = () => {
    return(
        <div className=" relative">
            <Input className=" border-black py-5 rounded-3xl"/>
            <button className="py-1 px-3 bg-[#1260e6] hover:bg-[#2466ebf7] font-semibold absolute top-1 right-1 rounded-3xl">Envoyer</button>
        </div>
    )
}