import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsSliceActions } from "../../store/itemsSlice";
import { fetchStatusActions } from "../../store/fetchStatusSlice";
import LoadingSpinner from "./LoadingSpinner";
const FetchItems=({children})=>{
const fetchStatus=  useSelector(store=>store.fetchStatus);
const dispatch=useDispatch();
useEffect(()=>{
  if(fetchStatus.fetchDone) return ;
const controller = new AbortController();
const signal = controller.signal;
dispatch(fetchStatusActions.markFetchingStarted());
fetch("http://localhost:4000/items",{signal})
.then(res=>res.json())
.then(data=>{
dispatch(fetchStatusActions.markFetchDone());
dispatch(fetchStatusActions.markFetchingFinished());
dispatch(itemsSliceActions.addInitialItems(data.items));
});
return ()=>{
  controller.abort();
}
},[fetchStatus])
return(
  <>
  </>
)
}
export default FetchItems;