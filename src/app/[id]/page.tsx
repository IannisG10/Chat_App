
// import React from "react"
 import { ProductType } from "@/types/ProductType"
 import { Trash2,PenLine } from "lucide-react"
// import PopUp from "@/components/layout/PopUp"
 import { motion } from "motion/react"
// import { useParams } from "next/navigation"
import { useAppSelector,useAppDispatch } from "@/hook/useProduct"
import { setIsDelete } from "@/redux/slice/productSlice"

const getProdoductDetails =  async (id: string): Promise<ProductType> => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    return response.json()
}



const ProductDet = async ({ params }: { params: {id: string}}) => {

    const productDetail = await getProdoductDetails(params.id)

    return(
        <div className=" flex justify-center items-center">
           <div  className="flex flex-col  p-4 w-2/4  cursor-pointer">
                <div className=" flex justify-center  border border-gray-100 p-2 w-full">
                    <img src={productDetail.image} alt={productDetail.title} className=" size-36" />
                </div>
                <div className=" flex flex-row gap-1 justify-between items-end w-full px-4 border-x border-b py-1 border-gray-100">
                    <div>
                        <p className=" font-bold text-lg w-3/4">{productDetail.title}</p>
                        <p className=" text-xs text-gray-400 font-medium">{productDetail.category}</p>
                        <p className=" text-slate-800 text-sm font-medium font-serif w-3/5" >{productDetail.description}</p>
                        <p className=" font-semibold text-lg">{productDetail.price} €</p>
                    </div>
                    <div className=" flex gap-1">
                        <div className=" flex justify-center items-center p-1 border w-fit h-fit
                            border-blue-200 hover:bg-blue-300 transition-all duration-150">
                            <PenLine color="blue" size={20}/>
                        </div>
                        <div className=" flex justify-center items-center p-1 border w-fit h-fit
                             border-red-200 hover:bg-red-300 transition-all duration-150"
                             
                             >
                            <Trash2 color="red" size={20} />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ProductDet