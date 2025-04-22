""
import React from "react"
import { Register } from "@/components/sections/auth/Register"
import { Toaster } from "@/components/ui/toaster"

export default function Signup(){
    return(
        <>
            <Register/>
            <Toaster />
        </>
    )
}