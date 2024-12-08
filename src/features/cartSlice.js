import { createSlice } from '@reduxjs/toolkit'
import {  useEffect, useState } from 'react';

const initialState = {
    cartItems: [],
    search:''
}


    




export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {

    addTocart: (state,action) => {
  
    const isItemInCart = state.cartItems.find((cartItem) => cartItem.id === action.payload.id); 

    if (isItemInCart) {
        state.cartItems = 
        state.cartItems.map((cartItem) => 
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      ;
    } else {
        state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
    }
    },
    removeFromCart:(state,action)=>{

        const isItemInCart = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);

        if (isItemInCart.quantity === 1) {
          state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
        } else {
          state.cartItems =
            state.cartItems.map((cartItem) =>
              cartItem.id === action.payload.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            
          );
        }


    },
     clearCart: (state) => {
      state.cartItems = []
    },

    getCartTotal: (state) => {
        return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        
        
    },  

    getCartCount: (state) => {
        return state.cartItems.reduce((total, item) => total + item.quantity, 0);

    },
    setSearch: (state,action) => {
       state.search = action.payload
    },


  

   
  
  


   
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },




  
})

// Action creators are generated for each case reducer function

export const { addTocart, removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    setSearch
     } = cartSlice.actions

export default cartSlice.reducer