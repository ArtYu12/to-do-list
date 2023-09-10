import { Action, applyMiddleware, combineReducers ,legacy_createStore as createStore} from "redux";
import planReducer from "./plan-reducer";
import tablesReducer from "./tables-reducer";
import createTableReducer from "./createTable-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import tableReducer from "./table-reducer";

type reducersType = typeof reducers
export type InferActionsType<T> = T extends {[key:string]: (...args:any[]) => infer U} ? U :never
export type AppStateType = ReturnType<reducersType>
export type BaseThunkType<A extends Action,R = Promise<void>> = ThunkAction<R,AppStateType,unknown,A>

const reducers = combineReducers({
    planPage:planReducer,
    tablesPage:tablesReducer,
    createTable:createTableReducer,
    tablePage:tableReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.store = store
export default store