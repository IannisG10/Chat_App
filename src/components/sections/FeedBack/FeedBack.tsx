import React from "react"
import Image from "next/image"
import { InputFeedBack } from "@/components/block/Input/InputFeedBack"

export const FeedBack = () => {
    return(
        <div className=" flex justify-between items-center mt-5 py-5 my-4 px-2">
            <Image
                src="/img/lootie-3.jpeg"
                alt="lootie 3"
                width={200}
                height={250}
            />
            <div className="w-1/2 flex flex-col gap-5">
                <h1 className=" text-4xl font-bold text-center">Feed-Back</h1>
                <p className=" text-center text-gray-700 text-sm" >
                    Envoyez-nous un message ,on adore vou lire! Que ce soit pour une question,une suggestion ou juste un bonjour,on est là pour 
                    vous répondre avec le sourire
                </p>
                <InputFeedBack/>
            </div>
        </div>
    )
}