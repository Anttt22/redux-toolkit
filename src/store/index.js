import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'

import uiReducer from './ui-slice'

const store=configureStore({
    reducer:{
        ui: uiReducer,
        cart: cartSlice.reducer
    },
})

export default store;