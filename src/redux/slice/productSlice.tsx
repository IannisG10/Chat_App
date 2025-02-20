import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "@/types/ProductType";
interface ProductState {
    product: ProductType[]
}

const initialState: ProductState = {
    product: []
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


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.product = action.payload
        })
        
    }
})


export default productSlice.reducer