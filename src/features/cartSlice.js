import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'


const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQty: 0,
    cartTotalAmount:0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action){

            const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Upadated ${action.payload.name} quantity in cart`, {
                    position:'top-center'
                })

            }else{
                const temProduct = {...action.payload, cartQuantity:1}
            state.cartItems.push(temProduct);
            toast.success(`${action.payload.name} added to cart`, {
                position:'top-center'
            })
            }

            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            
        },
        removeFromCart(state,action){
         const nextCartItems = state.cartItems.filter(
                cartItem => cartItem._id !== action.payload._id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} removed from cart`, {
                position:'top-center'
            })
            
        },
    decreaseCartQuantity(state,action){
        const itemIndex = state.cartItems.findIndex(
            cartItem => cartItem._id === action.payload._id
        )

        if(state.cartItems[itemIndex].cartQuantity > 1){
            state.cartItems[itemIndex].cartQuantity-=1

            toast.info(`Decreased ${action.payload.name} cart quantity`, {
                position:'top-center'
            })
        } else if (state.cartItems[itemIndex].cartQuantity === 1){
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem._id !== action.payload._id
            )
            state.cartItems = nextCartItems;
          
            toast.error(`${action.payload.name} removed from cart`, {
                position:'top-center'
            })
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearXenexCart(state){
        state.cartItems = []
        toast.error(`Cart cleared`, {
            position:'top-center'
        })
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getTotals(state,action){
     let {total, quantity} = state.cartItems.reduce((cartTotal,cartItem) => {
           const {price,cartQuantity} = cartItem;
           const itemTotal = price * cartQuantity;

           cartTotal.total += itemTotal
           cartTotal.quantity += cartQuantity

           return cartTotal

        }, {
            total:0,
            quantity:0,
        })

        state.cartTotalQty = quantity;
        state.cartTotalAmount = total;
    }
    },

  
})

export const {addToCart,removeFromCart,decreaseCartQuantity,clearXenexCart,getTotals} = cartSlice.actions;

export default cartSlice.reducer;