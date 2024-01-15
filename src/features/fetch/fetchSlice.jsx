import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json'

const initialState = {
    retailSales: [],
}

const fetchSlice = createSlice({
    name:'fetch',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.retailSales = [];
        },
        fetchData:(state=>{
            state.retailSales = data;
        })

    }

}) 


export const {clearCart, fetchData} = fetchSlice.actions;

export default fetchSlice.reducer;