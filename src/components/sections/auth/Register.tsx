"use client"
import React from "react";
import {BiChevronLeft} from "react-icons/bi"
import { ExternalAuth } from "@/components/block/ExternalAuth/ExternalAuth";
import { InputAuth } from "@/components/block/Input/InputAuth";
import Link from "next/link";
import { FormProvider } from "react-hook-form"
import { useForm } from "react-hook-form";
import { InputField } from "@/entities/application-entities/authentication";

export const Register = () => {
    const methods = useForm<InputField>()
    const onSubmit = (data: InputField) => {
        console.log("Formulaire validé :",data);
        methods.reset()
    }

    return(
        <FormProvider {...methods}>
            <form className=" flex justify-center items-center h-screen" onSubmit={methods.handleSubmit(onSubmit)}>
                <div className=" flex flex-col justify-center  gap-3 w-1/4">
                    <div className=" flex justify-between items-center w-full">
                        <div className=" p-1 hover:bg-gray-50 rounded-full cursor-pointer">
                            <BiChevronLeft size={28} />
                        </div>
                        <h3 className=" text-3xl font-bold">S'inscrire</h3>
                    </div>
                    <div className=" flex w-full gap-2">
                        <ExternalAuth authTittle="Google" src="/logo/Google.png" alt="Logo Google" />
                        <ExternalAuth authTittle="Faebook" src="/logo/Facebook.png" alt="Logo Faebook"/>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <InputAuth placeholder="Nom d'utilisateur" label="username"/>
                        <InputAuth placeholder="email" label="email"/>
                        <InputAuth placeholder="mot de passe" label="password"/>
                        <InputAuth placeholder="confirmation mot de passe" label="password"/>
                    </div>
                    <div className=" flex justify-start pl-2 gap-1 items-center ">
                        <input type="checkbox"  />
                        <span className=" text-gray-400 text-sm">Enregistrer le mot de passe</span>
                    </div>
                    <div className=" w-full">
                        <button type="submit" className=" bg-[#ebdb79] hover:bg-[#eede74] w-full p-2 rounded-xl font-semibold">
                            S'inscrire
                        </button>
                    </div>
                    <div className=" flex justify-center">
                        <Link href="/authentication/Signin" className="text-sm text-gray-400">Se connecter</Link>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}