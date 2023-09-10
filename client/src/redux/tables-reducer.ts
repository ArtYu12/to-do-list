import { tableAPI, tablesAPI } from "../api/tables/tables-api"
import { BaseThunkType, InferActionsType } from "./redux-store"

const SET_NEW_TABLE = 'SET_NEW_TABLE'
const SET_TABLES = "SET_TABLES"
const SET_FETCH_PROGRESS = "SET_FETCH_PROGRESS"
const DELETE_TABLE = "DELETE_TABLE"

type ActionsType = InferActionsType<typeof actions>
type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsType>

export type tableFullType = {
    tableData:tableType
    title:string
    __v:number
    _id:string
}
export type tableType = {
    items:Array<string>
    days:Array<string | number | undefined>
    data:Array<dataType>
}
export type dataType = {
    name:string
    status: Array<string>
}

const initialState = {
    tables:[] as Array<tableFullType>,
    progress:true as boolean
}

const tablesReducer = (state:InitialStateType = initialState, action:ActionsType):InitialStateType => {
    switch(action.type) {
        case SET_TABLES : {
            return {
                ...state,
                tables:action.tables
            }
        } 
        case SET_NEW_TABLE : {
            return {
                ...state,
                tables:[...state.tables,action.table]
            }
        }
        case SET_FETCH_PROGRESS: {
            return {
                ...state,
                progress: action.progress,
            };
        }
        case DELETE_TABLE: {
            const newTables:Array<tableFullType> = state.tables.filter((table:tableFullType) => {
                if(table._id !== action.id) {
                    return false
                }
                return true
            })
            debugger
            return {
                ...state,
                tables:newTables
            };
        }
        default : {
            return state
        }
    }
}
export const actions = {
    setTables:(tables:Array<tableFullType>) => ({type:SET_TABLES,tables}),
    setNewTable:(table:tableFullType) => ({type:SET_NEW_TABLE,table}),
    deleteTable:(id:string) => ({type:DELETE_TABLE,id}),
    fetchProgress:(progress:boolean) => ({type:SET_FETCH_PROGRESS,progress}),
}


export const getTables = ():ThunkType => async (dispatch) => {
    dispatch(actions.fetchProgress(false))
    let response = await tablesAPI.getTables()
    if(response.status === 200) {
        dispatch(actions.setTables(response.data))
    }
    dispatch(actions.fetchProgress(true))
}
export const createNewTable = ({items,days,data}):ThunkType => async (dispatch) => {
    dispatch(actions.fetchProgress(false))
    let response = await tableAPI.createTable({items,days,data});
    if(response.status === 200) {
        dispatch(actions.setNewTable(response.data))
    }
    dispatch(actions.fetchProgress(true))
}
export const deleteTableById = (id:string):ThunkType => async (dispatch) => {
    let response = await tableAPI.deleteTable(id);
    debugger
    if(response.status === 200) {
        dispatch(actions.deleteTable(id))
    }
}

export default tablesReducer