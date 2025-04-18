import React from "react"
import Link from "next/link"
import { IconRouteType } from "@/entities/compoent-entities/header-entities"
import { DotMenu } from "@/components/block/ResponsiveMenu/DotMenu"

export interface HeaderProps {
    barComponent?: React.ReactElement
    iconList: IconRouteType[]
}
export const Header = ({barComponent,iconList}: HeaderProps)=> {
    return(
        <header className="flex justify-between items-center gap-3">
            <h1 className=" md:font-bold font-extrabold md:text-2xl text-lg">ChatBot.</h1>
            {barComponent}
            <div>
                <div className={`md:flex  items-center ${iconList.length > 1 && "hidden"}`}>
                    {iconList.map((item,index)=> (
                        <Link href={item.href} key={index} 
                            className="p-1 rounded-full hover:bg-gray-50 transition-all duration-150"
                        >
                            {item.iconComponent}
                        </Link>
                    ))}
                </div>
                <DotMenu iconList={iconList}/>
            </div>
        </header>
    )
}