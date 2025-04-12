import { createSlice,PayloadAction } from "@reduxjs/toolkit";

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
        setSearch: (state,action: PayloadAction<string>) =>{
            state.search = action.payload
        }
    }
})

export default searchSlice.reducer
export const { setSearch } = searchSlice.actions