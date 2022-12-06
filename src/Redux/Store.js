import { configureStore } from "@reduxjs/toolkit"
import { Addproduct, Allproduct, category, register } from "./reducer/rootReducer";




const store = configureStore({
    reducer:{
        Addproduct: Addproduct,
        Allproduct: Allproduct,
        category: category,
        register: register
    }
})

export default store