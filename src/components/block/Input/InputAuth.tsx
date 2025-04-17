"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/Input"
import { InputProps } from "@/entities/compoent-entities/input-entities"
import { InputField } from "@/entities/application-entities/authentication"
import {useFormContext} from "react-hook-form"
import { Eye,EyeClosed } from "lucide-react"

export const InputAuth = ({placeholder,label,options,type} : InputProps) => {

    const {register,formState: {errors}} = useFormContext<InputField>()
    const isPassword = type === "password" && (label === "password" || label === "confirm_password")
    const [isVisiblePassword,setIsVisiblePassword] = useState<boolean>(false)

    const toggleInputType = () => {
        setIsVisiblePassword(!isVisiblePassword)
    }
    return(
        <> 
            <div className=" relative">
                <Input  
                        placeholder={placeholder}
                        className=" rounded-xl p-5 w-full border-black shadow-none"
                        {...register(label,options)}
                        type={type}
                />
                {isPassword && 
                    isVisiblePassword ? 
                        <Eye className=" absolute top-2.5 right-1.5 cursor-pointer" size={19} onClick={toggleInputType}/> : 
                        <EyeClosed className=" absolute top-2.5 right-1.5 cursor-pointer" size={19} onClick={toggleInputType}/>
                    // <EyeClosed className=" absolute top-2.5 right-1.5 cursor-pointer" size={19}/>
                    // isVisiblePassword ? 
                        // <EyeClosed size={19} 
                        //     className=" absolute top-2.5 right-1.5 cursor-pointer"
                        //     onClick={toggleInputType}
                        // /> : 
                        // <Eye size={19}
                        //     className=" absolute top-2.5 right-1.5 cursor-pointer"
                        //     onClick={toggleInputType}
                        // />

                }
            </div>
           <div className=" flex justify-center font-medium">
                {errors[label] && <span className=" text-sm  text-red-600">{errors[label]?.message}</span>}
           </div>
        </>
    )
}