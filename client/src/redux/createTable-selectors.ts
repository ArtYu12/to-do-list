import { AppStateType } from "./redux-store"

export const selectItems = (state:AppStateType) => {
    return state.createTable.items
}
export const selectDays = (state:AppStateType) => {
    return state.createTable.days
}