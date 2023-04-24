import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  wishlist:[],
  selectedProducts:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const item = state.products.find((item)=> item.id=== action.payload.id)
        if(item){
            item.quantity += action.payload.quantity
        }
        else{
            state.products.push(action.payload)
        }
    },
    removeFromCart: (state,action) => {
      state.products = state.products.filter(item=>item.id!== action.payload.id)
    },
    reset: (state) => {
      state.products = []
    },
    addToWishlist:(state,action)=>{
      const item = state.wishlist.find((item)=> item.id=== action.payload.id)
      if(item){
      }
      else{
        state.wishlist.push(action.payload)
      }
    },
    removeFromWishlist:(state,action)=>{
      state.wishlist = state.wishlist.filter(item=>item.id!== action.payload.id)
    },
    resetWishlist:(state)=>{
      state.wishlist = []
    },
  },
})

export const { addToCart, removeFromCart, reset , addTOSelectedProduct, addToWishlist,removeFromWishlist,resetWishlist } = cartSlice.actions

export default cartSlice.reducer