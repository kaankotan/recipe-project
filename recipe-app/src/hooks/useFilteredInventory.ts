import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo } from "react";

export const useFilteredInventory = () => {
    const { inventorys, showOnlyDone } = useSelector((state: RootState) => state.inventory)

    return useMemo(() => {
        return showOnlyDone ? inventorys.filter(item => item.done) : inventorys
    }, [inventorys, showOnlyDone])
}