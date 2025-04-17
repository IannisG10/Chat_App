"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/Input"
import { InputProps } from "@/entities/compoent-entities/input-entities"
import { InputField } from "@/entities/application-entities/authentication"
import {useFormContext} from "react-hook-form"


export const InputAuth = ({placeholder,label,options,type} : InputProps) => {

    const {register,formState: {errors}} = useFormContext<InputField>()
    return(
        <> 
            <div className=" relative">
                <Input  
                        placeholder={placeholder}
                        className=" rounded-xl p-5 w-full border-black shadow-none"
                        {...register(label,options)}
                        type={type}
                />
            </div>
           <div className=" flex justify-center font-medium">
                {errors[label] && <span className=" text-sm  text-red-600">{errors[label]?.message}</span>}
           </div>
        </>
    )
}