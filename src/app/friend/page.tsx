import React from "react"
import { Header } from "@/components/sections/Header/Header"
import { FriendSuggestion } from "@/components/Friend/FriendSuggestion"
import { SearchBar } from "@/components/SearchBar/SearchBar"
import { IconRouteType } from "@/entities/compoent-entities/header-entities"
import {BiHome,BiBell,BiLogOutCircle} from "react-icons/bi"

export default function Friend(){
    const icoList: IconRouteType[] = [
        {
            href:"/Home",
            iconComponent: <BiHome size={27}/>
        },
        {
            href:"",
            iconComponent: <BiBell size={27}/>
        },
        {
            href:"/",
            iconComponent: <BiLogOutCircle size={27}/>
        }
    ]
    return(
        <div className="p-4">
            <Header
               barComponent={<SearchBar/>}
                iconList={icoList}
            />
            <FriendSuggestion/>
        </div>
    )
}