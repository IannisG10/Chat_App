"use client"
import React from "react";
import { FriendCarrousel } from "@/components/block/FriendCarrousel/FriendCarrousel";
import { Header } from "@/components/sections/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { NavBar } from "@/components/block/NavBar/NavBar";
import { FeedBack } from "@/components/sections/FeedBack/FeedBack";
import { Footer } from "@/components/sections/Footer/Footer";
import { IconRouteType } from "@/components/sections/Header/Header.types";
import {BiBell,BiLogOutCircle,BiMessageRounded} from "react-icons/bi"
import { useFethUser } from "@/hooks/use-fetchUsers";

export default function Acceuil(){
    
    
    const icoList: IconRouteType[] = [
        {
            href: "",
            iconComponent: <BiBell size={27}/>
        },
        {
            href: "/messages",
            iconComponent: <BiMessageRounded size={27}/>
        },
        {
            href: "/",
            iconComponent: <BiLogOutCircle size={27}/>
        }
    ];
    const {data: user} = useFethUser()
    return(
        <div className="p-4">
            <Header
                barComponent={
                        <NavBar firstItem="Acceuil" secondItem="Ami(e)s" thirdItem="Contacts"
                                first_href="/" second_href="/friend" third_href=""
                        />}
                iconList={icoList}
            />
            <Hero
                titleHero={`Bienvenue à ChatBot, ${user.id}`}
                description="Vous cherchez une manière rapide fluide et intuitive pour rester en connecté avec vos proches,collègues ou communauté ? ChatBot est là pour transformer votre façon de communiquer !"
                buttonContent="Voir les discussions"
            />
            <FriendCarrousel/>
            <FeedBack/>
            <Footer/>
        </div>
    )
}