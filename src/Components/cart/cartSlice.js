import { createSlice } from "@reduxjs/toolkit";
import { renderMatches } from "react-router-dom";
const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existingItem = state.findIndex((i) => i.id === action.payload.id);

      if (existingItem >= 0) {
        state[existingItem].quantity += 1;
      } else {
        // Add new item to cart
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increment:(state,action)=>{
        return state.map((item)=>{
            if(item.id===action.payload.id){
                return {...item,quantity:item.quantity+1};
            }
            return item;
        })
    },
    decrement:(state,action)=>{
       return state.map((item)=>{
            if(item.id==action.payload.id){
              if(item.quantity==1){
                removeFromCart(item.id)
              }
              else{
                
                return {...item , quantity: item.quantity-1};
              }
            }
            return item;
        })
    },
    
  },
});
export const { addToCart, removeFromCart,increment ,decrement} = cartSlice.actions;
export default cartSlice.reducer;
