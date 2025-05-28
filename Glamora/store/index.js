import {configureStore, createSlice} from"@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import BagSlice from "./BagSlice";
const Myntrastore=configureStore({reducer:{
  items:itemsSlice.reducer,
  fetchStatus:fetchStatusSlice.reducer,
  bag:BagSlice.reducer
}});
export default Myntrastore;
