"use client"
import React from "react"
import SearchBar from "../ui/SearchBar"
import { PlusIcon,LogInIcon } from "lucide-react"
import { useRouter } from "next/navigation"


const TopBar: React.FC = ()=>{
    const router = useRouter()
    
    return(
        <header className=" flex justify-between items-center m-2 p-2  shadow border border-gray-100">
            <SearchBar/>
            <div className=" flex items-center gap-2">
                <div className=" cursor-pointer opacity-95 p-1 transition hover:bg-gray-300 duration-200 ease-in-out border hover:border-gray-400"
                    title="S'authentifier"
                >
                    <LogInIcon color="gray"/>
                </div>
                <div className=" hover:bg-gray-300 opacity-95 cursor-pointer p-1 transition duration-200 ease-in-out border hover:border-gray-400"
                    title="Ajouter un nouveau produit"
                    onClick={()=>{
                        router.push("/newArticle")
                    }}
                >
                    <PlusIcon color="gray"/>
                </div>
                
            </div>
        </header>
    )
}

export default TopBar