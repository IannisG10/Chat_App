"use client"
import React from "react";
import { InputProps } from "./Input.types";
import { InputFieldType } from "./Input.types";
import { useFormContext } from "react-hook-form";

export const InputAuth = ({placeholder,field,type,options}: InputProps) => {
    
    const {register,formState: {errors}} = useFormContext<InputFieldType>()
    return(
        <>
            <input placeholder={placeholder} type={type}
                className=" border border-black w-full rounded-lg p-2 outline-none" 
                {...register(field,options)} />
                {errors[field] && <span className=" text-sm font-medium text-red-500">{errors[field]?.message}</span>}
        </>
    )
}