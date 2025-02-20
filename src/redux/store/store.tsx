import { configureStore } from "@reduxjs/toolkit/react";
import productSlice from "../slice/productSlice";

const store = configureStore({
    reducer:{
        product: productSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch