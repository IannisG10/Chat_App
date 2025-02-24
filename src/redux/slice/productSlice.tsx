"use client"

import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types/ProductType";
interface ProductState {
    product: ProductType[];
    productDetail: ProductType[];
    isDelete: boolean
}

const initialState: ProductState = {
    product: [],
    productDetail: [],
    isDelete: false
}

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async ()=> {
        try{
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()

            return data

        }catch(err){
            console.error("Impossible de fetch les depuis Fake Store API")
        }
    }
)

export const fetchProductDetail = createAsyncThunk(
    'product/fetchProductDetil',
    async (id: string | null) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()

            return data
        } catch (error) {
            console.error("Imposssible de fetch les details ")
        }
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setIsDelete: (state,action: PayloadAction<boolean>) => {
            state.isDelete = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.product = action.payload
        }),
        builder.addCase(fetchProductDetail.fulfilled,(state,action) =>{
            state.productDetail = action.payload
        })
        
    }
})

export const {setIsDelete} = productSlice.actions
export default productSlice.reducer