"use client"
import React from "react";
import { InputAuth } from "@/components/block/Input/InputAuth";
import { InputField } from "@/entities/compoent-entities/authentification-entities";
import {useForm} from "react-hook-form"
import { FormProvider } from "react-hook-form";
import { submitForm } from "@/actions/submitForm";
import { ExternalAuth } from "@/components/block/ExternalAuth/ExternalAuth";
import {BiChevronLeft} from "react-icons/bi"
import Link from "next/link";

export const Register = () => {

    const methods = useForm<InputField>()
    
    return(
        <FormProvider {...methods}>

            <form className="  flex justify-center items-center h-screen" 
                    onSubmit={methods.handleSubmit((data)=> {submitForm(data,methods)})}>
                <div className=" flex flex-col justify-center  gap-3 md:w-1/4 w-2/3">
                    <div className=" flex justify-between items-center w-full">
                        <BiChevronLeft size={35} className=" p-1 cursor-pointer rounded-full hover:bg-gray-50"/>
                        <h3 className="text-3xl font-bold">S'inscrire</h3>
                    </div>
                    <div className=" flex w-full gap-2">
                        <ExternalAuth authTittle="Google" src="/logo/Google.png" alt="Google Logo"/>
                        <ExternalAuth authTittle="Facebook" src="/logo/Facebook.png" alt="Facebook logo"/>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <InputAuth field="username" type="text" 
                            options={{required:"Veuillez fournir un mot de passe"}}    placeholder="nom d'utilisateur"/>
                        <InputAuth field="email" type="text" 
                            options={{required:"Adresse email obligatoire"}}    placeholder="email"/>
                        <InputAuth field="password" type="password" 
                            options={{required:"Mot de passe requis"}}    placeholder="mot de passe"/>
                        <InputAuth field="confirm_password" type="password" 
                            options={{required:"Veuillez confirmer le mot de passe"}}  placeholder="confirmer le mot de passe"/>
                    </div>
                    <div className=" flex justify-start pl-2 gap-1 items-center ">
                        <input type="checkbox"  />
                        <span className=" text-gray-400 text-sm">Enregistrer le mot de passe</span>
                    </div>
                    <button className="bg-yellow-200 p-2 rounded-lg font-semibold w-full">S'inscrire</button>
                    <div className=" flex justify-center">
                        <Link href="/authentication/Signin" className=" text-sm text-gray-400 hover:text-gray-500 transition-all duration-150">S'inscrire</Link>
                    </div>
                </div>
            </form>

        </FormProvider>
    )
} 