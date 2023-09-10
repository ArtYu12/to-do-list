import { AppStateType } from "./redux-store";

export const selectTable = (state:AppStateType) => {
    return state.tablePage.table
}
