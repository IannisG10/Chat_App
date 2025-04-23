import { About } from "@/components/sections/About/About";
import { FeedBack } from "@/components/sections/FeedBack/FeedBack";
import { Footer } from "@/components/sections/Footer/Footer";
import { Header } from "@/components/sections/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { NavBar } from "@/components/block/NavBar/NavBar";
import { IconRouteType } from "@/components/sections/Header/Header.types";
import {BiLogInCircle} from "react-icons/bi"

export default function Home() {
  const icoList: IconRouteType[] = [
    {
      href: "/authentication/Signup",
      iconComponent: <BiLogInCircle size={27}/>
    }
  ]
  return (
    <div className="md:p-4 p-2">
      <Header  
        barComponent={<NavBar firstItem="Acceuil" secondItem="A propos" thirdItem="Contact"/>}
        iconList={icoList}
      />
      <Hero 
        titleHero="Découvrez notre application ChatBot" 
        buttonContent="Démarrer"
        description="Vous cherchez une manière rapide fluide et intuitive pour rester en connecté avec vos proches,collègues ou communauté ? ChatBot est là pour transformer votre façon de communiquer !"
        />
      <About/>
      <FeedBack/>
      <Footer/> 
    </div>
  );
}
