import React from "react"
import { Input } from "./Input"
import { Search } from "lucide-react"

const SearchBar: React.FC =() =>{
    
    return(
        <div className=" flex items-center">
            <Input placeholder="Rechercher..." 
                
            className=" rounded-none border border-gray-300  h-full border-y border-l focus:border-gray-300 p-2 outline-none bg-slate-200 font-medium  "/>
            <div className=" p-2 bg-gray-300  h-full border-none cursor-pointer hover:bg-slate-300 transition duration-100">
                <Search size={21} color="gray"/>
            </div>
        </div>
    )
}

export default SearchBar