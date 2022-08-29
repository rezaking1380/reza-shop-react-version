import { configureStore } from "@reduxjs/toolkit"
import { Addproduct, Allproduct, category } from "./reducer/rootReducer";




const store = configureStore({
    reducer:{
        Addproduct: Addproduct,
        Allproduct: Allproduct,
        category: category,
    }
})
console.log(store.getState())
export default store