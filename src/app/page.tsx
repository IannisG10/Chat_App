"use client"
import { ProductType } from "@/types/ProductType";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useAppDispatch,useAppSelector } from "@/hook/useProduct";
import { fetchProduct } from "@/redux/slice/productSlice";

export default function Home() {

  const dispatch = useAppDispatch()

  const product = useAppSelector(state => state.product.product)
  const search = useAppSelector(state => state.search.search)

  const productFiltered: ProductType[] = product.filter(items =>
    items.title.toLowerCase().includes(search.toLowerCase())  
  )

  useEffect(() =>{
    dispatch(fetchProduct())
  },[])
  return (
    <div >
      <div className=" grid  md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 md:p-5">
        {search !== "" ?
          productFiltered.map((item,index) =>(
            <motion.div key={index}
                      initial={{opacity: 0, y: 50}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.7}}
                      className=" flex flex-col p-4 w-3/4  cursor-pointer"
            >
              <div className=" flex justify-center  border border-gray-100 p-2 w-full">
                <img src={item.image} alt={item.title} className=" md:size-24 size-20" />
              </div>
              <div className=" flex flex-col gap-1 w-full px-4 border-x border-b py-1 border-gray-100">
                <p className=" font-semibold text-sm w-3/4">{item.title}</p>
                <p className=" text-xs text-gray-400 font-medium">{item.category}</p>
                <p className=" font-semibold text-sm">{item.price}€</p>
                
              </div>
              <Link href={`${item.id}`}>
                <button className="w-full bg-slate-800 hover:bg-slate-900 transition duration-150 ease-in-out p-2 text-white font-medium">
                    Voir
                </button>
              </Link>
            </motion.div>
          ))
          : 
          product.map((item,index)=>(
            <motion.div key={index}
                      initial={{opacity: 0, y: 50}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.7}}
                      className=" flex flex-col  p-4 w-3/4  cursor-pointer"
            >
              <div className=" flex justify-center  border border-gray-100 p-2 w-full">
                <img src={item.image} alt={item.title} className=" size-24" />
              </div>
              <div className=" flex flex-col gap-1 w-full px-4 border-x border-b py-1 border-gray-100">
                <p className=" font-semibold text-sm w-3/4">{item.title}</p>
                <p className=" text-xs text-gray-400 font-medium">{item.category}</p>
                <p className=" font-semibold text-sm">{item.price}€</p>
                <p>{search}</p>
              </div>
              <Link href={`${item.id}`}>
                <button className="w-full bg-slate-800 hover:bg-slate-900 transition duration-150 ease-in-out p-2 text-white font-medium">
                    Voir
                </button>
              </Link>
            </motion.div>
          ))
      }
      </div>
    </div>
  );
}
