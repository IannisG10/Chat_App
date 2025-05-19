"use client"
import React from "react";
import { InputAuth } from "@/components/block/Input/InputAuth";
import { ExternalAuth } from "@/components/block/ExternalAuth/ExternalAuth";
import { InputFieldType } from "@/components/block/Input/Input.types";
import Loader from "@/components/ui/loader";
import { useToast } from "@/hooks/use-toast";
import { useAuthentication } from "@/hooks/use-authentication";
import {BiChevronLeft} from "react-icons/bi"
import {FormProvider} from "react-hook-form"
import { useForm } from "react-hook-form";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const LOGIN_URL = "http://localhost:3500/login"

export const Login = () => {
    const {toast} = useToast() 
    
    const methods = useForm<InputFieldType>()
    const router = useRouter();
    const pathname =  usePathname()
    const {isPending,mutate} = useAuthentication(methods,router,pathname)
    const onSubmit = (data: InputFieldType) => {
        mutate({data: data,URL: LOGIN_URL, toast: toast})
    }
    // const onSubmit = async (data: InputFieldType) => {
    //         // fetch(LOGIN_URL,{
    //         //     method: "POST",
    //         //     headers: {
    //         //         'Content-Type': 'application/json'
    //         //     },
    //         //     body: JSON.stringify(data)
    //         // }).then(res => res.json())
    //         // .then(datas => {
    //         //     console.log("Token stocké: ",datas.message.token)
    //         //     localStorage.setItem("token",datas.message.token)
    //         //     methods.reset()
    //         //     router.push("/Home");
    //         // })
    //         // .catch(err => console.log(err))
    //         await submitForm(data,LOGIN_URL,toast)
    // }

    // const {isPending,mutate} = useMutation({
    //     mutationFn: onSubmit,
    //     onError: () => {
    //         console.log("Login error")
    //     },
    //     onSuccess: () => {
    //         console.log("Login successfully")
    //         methods.reset()
    //         setTimeout(()=>{
    //             router.push("/Home")
    //         },1000)
    //     },
    // })

    // const onSubmits = (data: InputFieldType) => {
    //     mutate(data)
    // }
    return(
        <FormProvider {...methods}>
            <form className=" flex justify-center items-center h-screen" onSubmit={methods.handleSubmit(onSubmit)}>
                <div className=" flex flex-col justify-center  gap-3 md:w-1/3 w-2/3">
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
                        <button type="submit" className={`bg-yellow-200 p-2 rounded-lg font-semibold w-full`} >
                            <span>
                                {isPending ? <Loader/> : "Se connecter"}
                            </span>
                            
                        </button>
                    <div className=" flex justify-center">
                        <Link href="/authentication/Signup" className=" text-sm text-gray-400 hover:text-gray-500 transition-all duration-150">S inscrire</Link>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
