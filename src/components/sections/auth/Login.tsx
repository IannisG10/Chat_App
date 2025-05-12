"use client"
import React, { useState } from "react";
import { InputAuth } from "@/components/block/Input/InputAuth";
import { ExternalAuth } from "@/components/block/ExternalAuth/ExternalAuth";
import {BiChevronLeft} from "react-icons/bi"
import {FormProvider} from "react-hook-form"
import { useForm } from "react-hook-form";
import { InputFieldType } from "@/components/block/Input/Input.types";
import Link from "next/link";
import { submitForm } from "@/actions/submitForm";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader";
import { useToast } from "@/hooks/use-toast";
const LOGIN_URL = "http://localhost:5000/login"

export const Login = () => {

    const {toast} = useToast() 
    const router = useRouter()
    
    const methods = useForm<InputFieldType>()

    const onSubmit = async (data: InputFieldType) => {
            // await FormSubmit(data,LOGIN_URL,toast)
            await fetch(LOGIN_URL,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(datas => {
                console.log("Token stocké: ",datas.message.token)
                localStorage.setItem("token",datas.message.token)
                methods.reset()
                router.push("/Home");
            })
            .catch(err => console.log(err))
    }

    // const {isPending,mutate} = useMutation({
    //     mutationFn: onSubmit,
    //     onSuccess: () => {
    //         console.log("Login successfully")
    //         methods.reset()
    //     },
    //     onError: () => {
    //         console.log("Login error")
    //     }
    // })

    // const onSubmits = (data: InputFieldType) => {
    //     mutate(data)
    // }
    return(
        <FormProvider {...methods}>
            <form className=" flex justify-center items-center h-screen" onSubmit={methods.handleSubmit(onSubmit)}>
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
                        <InputAuth placeholder="email" type="text" field="email" options={{required:"Nom requis"}}/>
                        <InputAuth placeholder="mot de passe" type="password" field="password" options={{required:"Mot de passe obligatoire"}}/>
                    </div>
                    <label className=" flex justify-start pl-2 gap-1 items-center cursor-pointer ">
                        <input type="checkbox"  />
                        <span className=" text-gray-400 text-sm">Enregistrer le mot de passe</span>
                    </label>
                    {/* <Link className=" w-full" href="/friend"> */}
                        <button type="submit" className={`bg-yellow-200 p-2 rounded-lg font-semibold w-full`} >
                            <span>
                                {/* {isPending ? <Loader/> : "Se connecter"} */}
                                Se connecter
                            </span>
                            
                        </button>
                    {/* </Link> */}
                    <div className=" flex justify-center">
                        <Link href="/authentication/Signup" className=" text-sm text-gray-400 hover:text-gray-500 transition-all duration-150">S inscrire</Link>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
