"use client"
import React from "react";
import { InputAuth } from "@/components/block/Input/InputAuth";
import { InputFieldType } from "@/components/block/Input/Input.types";
import { ExternalAuth } from "@/components/block/ExternalAuth/ExternalAuth";
import Loader from "@/components/ui/loader";
import { useToast } from "@/hooks/use-toast";
import { useAuthentication } from "@/hooks/use-authentication";
import { FormProvider } from "react-hook-form";
import {useForm} from "react-hook-form";
import { useRouter,usePathname } from "next/navigation";
import {BiChevronLeft} from "react-icons/bi"
import Link from "next/link";

const SIGNUP_URL = "http://localhost:3500/signup"

export const Register = () => {

    const methods = useForm<InputFieldType>();
    const password_value = methods.watch("password");
    const {toast} = useToast();
    const router = useRouter()
    const pathname = usePathname()
    const {isPending,mutate} = useAuthentication(methods,router,pathname)

    const onSubmit = (data: InputFieldType) => {
        mutate({data: data,URL: SIGNUP_URL,toast: toast})
    }

    return(
        <FormProvider {...methods}>
            <form className="flex justify-center items-center h-screen" 
                    onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-center  gap-3 md:w-1/3 w-2/3">
                    <Link href="/" className=" flex justify-between items-center w-full">
                        <BiChevronLeft size={35} className=" p-1 cursor-pointer rounded-full hover:bg-gray-50"/>
                        <h3 className="text-3xl font-bold">S inscrire</h3>
                    </Link>
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
                            options={{required:"Veuillez confirmer le mot de passe",validate: v => v === password_value || "Les mots de passe ne correspondent pas "}}  placeholder="confirmer le mot de passe"/>
                    </div>
                    <label className=" flex justify-start pl-2 gap-1 items-center cursor-pointer ">
                        <input type="checkbox"/>
                        <span className=" text-gray-400 text-sm">Enregistrer le mot de passe</span>
                    </label>
                    <button className={`bg-yellow-200 p-2 rounded-lg font-semibold w-full`} disabled={isPending}>
                        <span>
                            {isPending ? <Loader/> : "S'inscrire" }
                        </span>
                    </button>
                    <div className=" flex justify-center">
                        <Link href="/authentication/Signin" className=" text-sm text-gray-400 hover:text-gray-500 transition-all duration-150">Se connecter</Link>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}