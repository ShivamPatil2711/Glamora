import { createSlice } from "@reduxjs/toolkit";
const BagSlice=createSlice({
  name:"bag",
  initialState:[],// id store
  reducers:{
  addToBag: (state, action) => {
  const itemIndex = state.findIndex(item => item.id === action.payload);
  if (itemIndex !== -1) {
       state[itemIndex].quantity += 1;
  } else {
       state.push({ id: action.payload, quantity: 1 });
  }
},

removeFromBag: (state, action) => {
  return state.filter(item => item.id !== action.payload);
},

incrementQuantity: (state, action) => {
  const item = state.find(item => item.id === action.payload);
  if (item) {
    item.quantity += 1;
  }
},

decrementQuantity: (state, action) => {
  const item = state.find(item => item.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  }
},
 


  }
});
export const BagSliceActions=BagSlice.actions;
export default BagSlice;