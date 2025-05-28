import { createSlice } from "@reduxjs/toolkit";
const itemsSlice=createSlice({
  name:"items",
  initialState:[],
  reducers:{
    addInitialItems:(store,action)=>{
           return store=action.payload;
    },
 
  }
});
export const itemsSliceActions=itemsSlice.actions;
export default itemsSlice;