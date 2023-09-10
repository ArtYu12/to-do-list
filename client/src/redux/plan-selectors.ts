import { AppStateType } from "./redux-store"

export const selectTodos = (state:AppStateType) => {
    return state.planPage.todos
}
export const selectProgress = (state:AppStateType) => {
    return state.planPage.progress
}
