import React from "react"
import { Login } from "@/components/sections/auth/Login"
import { Toaster } from "@/components/ui/toaster"

export default function Signin(){
    return(
        <>
            <Login/>
            <Toaster/>
        </>
    )
}