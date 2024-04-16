import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
    reducer: {
        app: appSlice, // here we are adding appSlice into our store !!  
        search: searchSlice,
        chat : chatSlice,
    },
});

export default store;