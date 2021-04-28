import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from './inventorySlice'
import infoReducer from './infoSlice'

export const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
        info: infoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>