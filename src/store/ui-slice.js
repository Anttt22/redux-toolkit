
import {createSlice} from '@reduxjs/toolkit'


const uiSlice=createSlice({
    name:'ui',
    initialState: {cartIsVisible:false, notification: {} },
    reducers:{
        toggle(state){state.cartIsVisible=!state.cartIsVisible},
        showNotification(state, action){
            console.log(state.notification)  
            state.notification={
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            } 
            console.log(state.notification)        
        }
    }
})

export default uiSlice.reducer;
export const uiActions= uiSlice.actions;
