import { AppStateType } from "./redux-store";

export const selectTables = (state:AppStateType) => {
    return state.tablesPage.tables
}
export const selectProgress = (state:AppStateType) => {
    return state.tablesPage.progress
}