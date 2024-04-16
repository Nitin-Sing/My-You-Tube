import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
       addMessage : (state, action)=>{
        //    state.messages.push(action.payload);  // here we were pushing new element at back
        state.messages.splice(LIVE_CHAT_COUNT, 1);
        state.messages.unshift(action.payload); // here we are pushing the element at front
       },
    },

});


export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;