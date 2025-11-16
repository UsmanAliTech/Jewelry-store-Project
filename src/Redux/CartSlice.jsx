import {CartSlice, createSlice} from "@reduxjs/toolkit";
const initialState = {
    items:[],
    totalQuantity:0,
    totalAmount:0,
};
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
        const newItem=action.payload;
        const existingItem=state.items.find((item)=>{
            item.id===newItem.id;
        })
        state.totoalQuantity++;
        state.totalAmount+=newItem.price;
        if(existingItem){
   existingItem.quantity++;
        }else{
            state.items.push({
                ...newItem, quantity:1
            })
        }
        }
    }
})