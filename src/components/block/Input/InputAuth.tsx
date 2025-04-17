"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/Input"
import { InputProps } from "@/entities/compoent-entities/input-entities"
import { InputField } from "@/entities/application-entities/authentication"
import {useFormContext} from "react-hook-form"
import { EyeClosed,Eye } from "lucide-react"

export const InputAuth = ({placeholder,label,options,type} : InputProps) => {
    const [isVisiblePassword,setIsVisiblePassword] = useState<boolean>(false)

    const isPassword = type === "password" 
    const inputType = isPassword ? (isVisiblePassword ? "text" : "password") : type
    const tooglePassword_visibility = () =>{
        setIsVisiblePassword(!isVisiblePassword)
    }
    const {register,formState: {errors}} = useFormContext<InputField>()

    return(
        <> 
            <div className=" relative">
                <Input  
                        placeholder={placeholder}
                        className=" rounded-xl p-5 w-full border-black shadow-none"
                        {...register(label,options)}
                        type={inputType}
                />
                {isVisiblePassword ? 
                    <Eye size={19} className="absolute top-1 right-2" 
                        onClick={tooglePassword_visibility}/> : 
                    <EyeClosed className=" absolute top-1 right-2" 
                        onClick={tooglePassword_visibility} size={19}/>}
                
            </div>
           <div className=" flex justify-center font-medium">
                {errors[label] && <span className=" text-sm  text-red-600">{errors[label]?.message}</span>}
           </div>
        </>
    )
}