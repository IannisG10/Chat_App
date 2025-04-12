"use client"
import { Provider } from 'react-redux'
import { makeStore } from "@/redux/store/store"
import React from 'react'

export const ReduxProvider = ({
    children
} : {
    children: React.ReactNode
}) => {
    const store = makeStore()

    return <Provider store={store}>{children}</Provider>

}