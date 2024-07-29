import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Components/cart/cartSlice'

const  store=configureStore({
   reducer :
    {cart:cartReducer,
        
    },
});
export default store ;