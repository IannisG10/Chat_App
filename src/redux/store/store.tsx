import { configureStore } from "@reduxjs/toolkit/react";
import productSlice from "../slice/productSlice";
import searchSlice from "../slice/searchSlice";


export const makeStore = ()=> {
    return configureStore({
        reducer: {
            product: productSlice,
            search: searchSlice
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']