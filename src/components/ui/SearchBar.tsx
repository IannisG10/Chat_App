import React from "react"
import { Input } from "./Input"
import { Search } from "lucide-react"
import { useAppDispatch,useAppSelector } from "@/hook/useProduct"
import { setSearch } from "@/redux/slice/searchSlice"

const SearchBar: React.FC =() =>{

    const dispatch = useAppDispatch()
    const search = useAppSelector(state => state.search.search)
    const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }
    
    return(
        <div className=" flex items-center">
            <Input placeholder="Rechercher..." 
                onChange={handleSearchValue}
                value={search}
            className=" rounded-none border border-gray-300  h-full border-y border-l focus:border-gray-300 p-2 outline-none bg-slate-200 font-medium  "/>
            <div className=" p-2 bg-gray-300  h-full border-none cursor-pointer hover:bg-slate-300 transition duration-100">
                <Search size={21} color="gray"/>
            </div>
        </div>
    )
}

export default SearchBar