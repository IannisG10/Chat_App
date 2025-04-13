"use client"
import React from "react"
import { Input } from "@/components/ui/Input"
import { InputProps } from "@/entities/compoent-entities/input-entities"
import { InputField } from "@/entities/application-entities/authentication"
import {useFormContext} from "react-hook-form"

export const InputAuth = ({placeholder,label,options} : InputProps) => {
    const {register,formState: {errors}} = useFormContext<InputField>()
    return(
        <>
           <Input  
                placeholder={placeholder}
                className=" rounded-xl p-5 w-full border-black shadow-none"
                {...register(label,options)}
           />
           <div className=" flex justify-center font-medium">
                {errors[label] && <span className=" text-sm  text-red-600">{errors[label]?.message}</span>}
           </div>
        </>
    )
}