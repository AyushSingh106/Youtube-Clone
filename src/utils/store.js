import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appsSlice"; 
const store=configureStore({
    reducer:{
app:appReducer,
   }
})
export default store;