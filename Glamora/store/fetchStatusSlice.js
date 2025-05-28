import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice=createSlice({
  name:"fetchStatus",
  initialState:{
    fetchDone:false,//PENDING OR DONE 
    currentFetching:false
  },
  reducers:{
markFetchDone:(store)=>{
      store.fetchDone=true;
    },
    markFetchingStarted:(store)=>{
   store.currentFetching=true;
    },
    markFetchingFinished:(store)=>{
 store.currentFetching=false;
    }
  }
});
export const fetchStatusActions=fetchStatusSlice.actions;
export default fetchStatusSlice;