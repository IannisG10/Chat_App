"use client"
import { ProductType } from "@/types/ProductType";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Home() {
  const [data,setData] = useState<ProductType[] | null>(null)

  useEffect(() =>{
    const fetchProduct =  ()=>{
      axios.get("https://fakestoreapi.com/products").then((res)=>
        setData(res.data)
      ).catch(error=> console.error(error))
    }
    fetchProduct()
  },[])
  return (
    <div >
      <div className=" grid  grid-cols-4 gap-4 p-5">
        {data?.map((item,index) =>(

          <motion.div key={index} 
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          className=" flex flex-col  p-4 w-3/4  cursor-pointer">
            <div className=" flex justify-center  border border-gray-100 p-2 w-full">
              <img src={item.image} alt={item.title} className=" size-24" />
            </div>
            <div className=" flex flex-col gap-1 w-full px-4 border-x border-b py-1 border-gray-100">
              <p className=" font-semibold text-sm w-3/4">{item.title}</p>
              <p className=" text-xs text-gray-400 font-medium">{item.category}</p>
              <p className=" font-semibold text-sm">{item.price}€</p>
            </div>
            <button className="w-full bg-slate-800 hover:bg-slate-900 transition duration-150 ease-in-out p-2 text-white font-medium">
              Voir
            </button>
          </motion.div>
          // <div key={index} className=" flex flex-col  p-4 w-3/4  cursor-pointer">
            
          // </div>
        ))}
      </div>
    </div>
  );
}
