"use client"
import React from "react";
import { InputProps } from "@/entities/compoent-entities/authentification-entities";
import { useFormContext } from "react-hook-form";
import { InputField } from "@/entities/compoent-entities/authentification-entities";
import { EyeClosed } from "lucide-react";

export const InputAuth = ({placeholder,field,type,options}: InputProps) => {
    
    const {register,formState: {errors}} = useFormContext<InputField>()
    return(
        <>
            <input placeholder={placeholder} type={type}
                className=" border border-black w-full rounded-lg p-2 outline-none" 
                {...register(field,options)} />
                {errors[field] && <span className=" text-sm font-medium text-red-500">{errors[field]?.message}</span>}
        </>
    )
}