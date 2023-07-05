import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).cartItems :[],
        total: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).total : 0,
        tax: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).tax :10
    },
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.cartItems.find(item => item._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity = existingProduct.quantity += 1;
            } else {
                // state.cartItems.push()
                state.cartItems = [...state.cartItems, action.payload];
            }
            state.total += action.payload.price
        },
        deleteProduct: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
            state.total -= action.payload.price * action.payload.quantity
        },
        increase: (state, action) => {
            const existingProduct = state.cartItems.find(item => item._id === action.payload._id);
            existingProduct.quantity += 1
            state.total += action.payload.price
        },
        decrease: (state, action) => {
            const existingProduct = state.cartItems.find(item => item._id === action.payload._id);
            existingProduct.quantity -= 1
            if(existingProduct.quantity===0){
                state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
            }
            state.total -= action.payload.price
        },
        reset:(state)=>{
            state.cartItems=[]
            state.total=0
        }
    }})

export const { addProduct, deleteProduct, increase, decrease,reset } = cartSlice.actions
export default cartSlice.reducer