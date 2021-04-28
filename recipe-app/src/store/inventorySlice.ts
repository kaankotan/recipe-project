import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Inventory } from '../config/inventory'
import { v4 as uuid } from 'uuid'

type InventoryState = {
    inventorys: Inventory[],
    showOnlyDone: boolean,
}

const initialState: InventoryState = {
    inventorys: [],
    showOnlyDone: false,
}

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        addInventory(state, action: PayloadAction<string>) {
            state.inventorys.push({
                // Generate the id outside
                id: uuid(),
                title: action.payload,
                done: false,
            })
        },
        toggleInventory(state, action: PayloadAction<Inventory>) {
            const item = state.inventorys.find(({ id }) => id === action.payload.id)
            if (item !== undefined) {
                item.done = !item.done
            }
        },
        toggleFilter(state) {
            // toggle filter
            state.showOnlyDone = !state.showOnlyDone
        }
    }
})

export default inventorySlice.reducer

export const { addInventory, toggleInventory, toggleFilter } = inventorySlice.actions