"use client"
import React from "react";
import { InputAuth } from "@/components/block/Input/InputAuth";
import { InputFieldType } from "@/components/block/Input/Input.types";
import { ExternalAuth } from "@/components/block/ExternalAuth/ExternalAuth";
import { FormProvider } from "react-hook-form";
import { submitForm } from "@/actions/submitForm";
import {BiChevronLeft} from "react-icons/bi"
import Link from "next/link";
import {useForm} from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";


export const Register = () => {

    const methods = useForm<InputFieldType>()
    const password_value = methods.watch("password")
    const {toast} = useToast()

    const onSubmit =  async (data: InputFieldType)=> {
        try{
            await submitForm(data)
            toast({
                description: "Inscription réussi",
                variant: "success"
            })
            //methods.reset()
        }catch(err){
            console.error(err)
            toast({
                description: "Erreur lors de l'inscription. Veuillez rééesayer",
                variant: "destructive"
            })
            //methods.reset()
        }
    }
    // Send the data to the server with use Mutation
    const {isPending,mutate} = useMutation({
        mutationFn: onSubmit,
        onSuccess: (data) => {
            console.log("Inscription réussi",data)
            methods.reset()
        },
        onError: () => {
            console.log("Erreur d'inscription")
            methods.reset()
        }
    })

    const onSubmits = (data: InputFieldType) => {
        mutate(data)
    }
    
    return(
        <FormProvider {...methods}>
            <form className="  flex justify-center items-center h-screen" 
                    onSubmit={methods.handleSubmit(onSubmits)}>
                <div className="flex flex-col justify-center  gap-3 md:w-1/4 w-2/3">
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


