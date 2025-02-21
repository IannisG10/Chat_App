import { configureStore } from "@reduxjs/toolkit/react";
import productSlice from "../slice/productSlice";


export const makeStore = ()=> {
    return configureStore({
        reducer: {
            product: productSlice
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']