"use client"
import React from "react";
import { InputAuth } from "@/components/block/Input/InputAuth";
import { ExternalAuth } from "@/components/block/ExternalAuth/ExternalAuth";
import {BiChevronLeft} from "react-icons/bi"
import {FormProvider} from "react-hook-form"
import { useForm } from "react-hook-form";
import { InputFieldType } from "@/components/block/Input/Input.types";
import Link from "next/link";
import { submitForm } from "@/actions/submitForm";
import { useMutation } from "@tanstack/react-query";

const LOGIN_URL = "https://chat-app-api-5pvs.onrender.com/login"

export const Login = () => {
    
    const methods = useForm<InputFieldType>()

    const onSubmit = async (data: InputFieldType) => {
        try{
            await submitForm(data,LOGIN_URL)
            console.log("connexion réussi")
        }catch(err){
            console.log(err);
            
            throw new Error()

        }
    }

    const {isPending,mutate} = useMutation({
        mutationFn: onSubmit,
        onSuccess: () => {
            console.log("Login successfully")
        },
        onError: () => {
            console.log("Login error")
        }
    })

    const onSubmits = (data: InputFieldType) => {
        mutate(data)
    }
    return(
        <FormProvider {...methods}>
            <form className=" flex justify-center items-center h-screen" onSubmit={methods.handleSubmit((data)=>{
                onSubmit(data)
            })}>
                <div className=" flex flex-col justify-center  gap-3 md:w-1/4 w-2/3">
                    <div className=" flex justify-between items-center w-full">
                        <Link href="/" className=" p-1 hover:bg-gray-50 rounded-full cursor-pointer">
                            <BiChevronLeft size={28} />
                        </Link>
                        <h3 className=" text-3xl font-bold">Se connecter</h3>
                    </div>
                    <div className=" flex w-full gap-2">
                        <ExternalAuth authTittle="Google" src="/logo/Google.png" alt="Logo Google" />
                        <ExternalAuth authTittle="Faebook" src="/logo/Facebook.png" alt="Logo Faebook"/>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <InputAuth placeholder="Nom d'utilisateur" type="text" field="username" options={{required:"Nom requis"}}/>
                        <InputAuth placeholder="mot de passe" type="password" field="password" options={{required:"Mot de passe obligatoire"}}/>
                    </div>
                    <div className=" flex justify-start pl-2 gap-1 items-center ">
                        <input type="checkbox"  />
                        <span className=" text-gray-400 text-sm">Enregistrer le mot de passe</span>
                    </div>
                    <Link className=" w-full" href="/friend">
                        <button type="submit" className=" bg-[#ebdb79] hover:bg-[#eede74] w-full p-2 rounded-xl font-semibold">
                            Se connecter
                        </button>
                    </Link>
                    <div className=" flex justify-center">
                        <Link href="/authentication/Signup" className=" text-sm text-gray-400 hover:text-gray-500 transition-all duration-150">S inscrire</Link>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}