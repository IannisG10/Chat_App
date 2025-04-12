"use client"
import React from "react"
import { Input } from "@/components/ui/Input"
import { InputProps } from "@/entities/compoent-entities/input-entities"
import { InputField } from "@/entities/application-entities/authentication"
import {useFormContext} from "react-hook-form"

export const InputAuth = ({placeholder,label} : InputProps) => {
    const {register} = useFormContext<InputField>()
    return(
        <>
           <Input  
                placeholder={placeholder}
                className=" rounded-xl p-5 w-full border-black shadow-none"
                {...register(label)}
           />
        </>
    )
}