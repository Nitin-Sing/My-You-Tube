import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:"App",
    initialState:{
        isMenuOpne:true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpne = !state.isMenuOpne;
        },
        closeMenu: (state)=>{
            state.isMenuOpne = false;
        }
    },
});

export const {toggleMenu, closeMenu} = appSlice.actions;
export default appSlice.reducer;