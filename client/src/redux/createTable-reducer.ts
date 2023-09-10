import { InferActionsType } from "./redux-store"

type ActionsType = InferActionsType<typeof tableCreateActions>
type InitialStateType = typeof initialState

const SET_ITEM = 'SET_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const SET_DAYS = 'SET_DAYS'
const DELETE_DATA = 'DELETE_DATA'

const initialState = {
    items:[] as Array<string>,
    days:"" as string
}

const createTableReducer = (state:InitialStateType = initialState,action:ActionsType):InitialStateType => {
    switch(action.type) {
        case SET_ITEM : {
            return { 
                ...state,
                items:[...state.items,action.item]
            }
        }
        case DELETE_ITEM : {
            return {
                ...state,
                items:state.items.filter((i) => i !== action.item)
            }
        }
        case DELETE_DATA : {
            return {
                ...state,
                items:[],
                days:''
            }
        }
        case SET_DAYS : {
            return {
                ...state,
                days:action.days
            }
        }
        default: {
            return state;
        }
    }
}

export const tableCreateActions = {
    setNewItem:(item:string) => ({type:SET_ITEM,item}),
    deleteItem:(item:string) => ({type:DELETE_ITEM,item}),
    deleteData:() => ({type:DELETE_DATA}),
    setDays:(days:string) => ({type:SET_DAYS,days}),

}

export default createTableReducer