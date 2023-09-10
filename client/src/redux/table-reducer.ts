import { tableAPI } from "api/tables/tables-api";
import { BaseThunkType, InferActionsType } from "./redux-store";
import { tableFullType } from "./tables-reducer";

const SET_TABLE = 'SET_TABLE'
const UPDATE_TABLE = 'UPDATE_TABLE'
const DELETE_TABLE_DATA ='DELETE_TABLE_DATA'

type ActionsType = InferActionsType<typeof actions>
type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsType>

const initialState = {
    table:{} as tableFullType | {}
}

const tableReducer = (state:InitialStateType = initialState, action:ActionsType):InitialStateType => {
    switch(action.type) {
        case SET_TABLE : {
            return {
                ...state,
                table:action.table
            }
        }
        case UPDATE_TABLE: {
            return {
                ...state,
                table: action.table,
            };
        }
        case DELETE_TABLE_DATA : {
            return {
                ...state,
                table:{}
            }
        }
        default : {
            return state
        }
    }
}




export const actions = {
    setTable:(table:tableFullType) => ({type:SET_TABLE,table}),
    updateTable: (table:tableFullType) => ({type: UPDATE_TABLE,table}),
    deleteTableData: () => ({type: DELETE_TABLE_DATA}),
}

export const getTable = (id:string):ThunkType => async (dispatch) => {
    const response = await tableAPI.getTable(id)
    if(response.status === 200) {
        dispatch(actions.setTable(response.data))
    }
}
export const updateTable = (table:tableFullType):ThunkType => async (dispatch) => {
    let response = await tableAPI.updateTable(table)
    if(response.status === 200) {
        dispatch(actions.updateTable(response.data))
    }
}


export default tableReducer