import { createSlice } from "@reduxjs/toolkit";


interface ResearchState {
    search: string
}

const initialState: ResearchState = {
    search: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        
    }
})