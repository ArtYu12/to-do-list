import { Todos } from "../api/todos/todo-api"
import { Todo } from "../components/planPage/types/types"
import { BaseThunkType, InferActionsType } from "./redux-store"

type ActionsType = InferActionsType<typeof actions>
type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsType>

const SET_NEW_TODO = 'SET_NEW_PURPOSE'
const DELETE_TODO = 'DELETE_PURPOSE'
const SET_STATUS_TODO = 'SET_STATUS_TODO'
const SET_FETCH_PROGRESS = 'SET_FOLOWWING_PROGRESS'
const SET_NEW_TODOS = 'SET_NEW_TODOS'


const initialState = {
    todos:[] as Array<Todo>,
    progress:true
}

const planReducer = (state:InitialStateType = initialState,action:ActionsType):InitialStateType => {
    switch(action.type) {
        case SET_NEW_TODOS : {
            return { 
                ...state,
                todos:action.todos
            }
        }
        case SET_NEW_TODO : {
            return { ...state,
                todos:[action.todo,...state.todos]
            }
        }
        case DELETE_TODO : {
            return {
                ...state,
                todos:state.todos.filter((item) => item._id !== action.todoId)
            }
        }
        case SET_STATUS_TODO : {
            return {
                ...state,
                todos:state.todos.filter((todo) => {
                    if(todo._id === action.todoId) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        }
        case SET_FETCH_PROGRESS : {
            return {
                ...state,
                progress:action.progress
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    setNewTodos:(todos:Array<Todo>) => ({type:SET_NEW_TODOS,todos:todos}),
    setNewTodo:(todo:Todo) => ({type:SET_NEW_TODO,todo:todo}),
    deleteTodo:(todoId:number) => ({type:DELETE_TODO,todoId:todoId}),
    setStatus:(todoId:number) => ({type:SET_STATUS_TODO,todoId:todoId}),
    fetchProgress:(progress:boolean) => ({type:SET_FETCH_PROGRESS,progress:progress}),
}

export const getTodos = ():ThunkType  => {
    return async (dispatch) => {
        dispatch(actions.fetchProgress(false))
        let response = await Todos.getTodos()
        if(response.status === 200) {
            dispatch(actions.setNewTodos(response.data))
        }
        dispatch(actions.fetchProgress(true))
    }
}
export const setTodo = (todo:Todo):ThunkType => {
    return async (dispatch) => {
        const response = await Todos.setTodo(todo)
        if(response.status === 200) {
            dispatch(actions.setNewTodo(response.data))
        }
    }
}
export const deleteTodo = (id:number):ThunkType => {
    return async (dispatch) => {
        const response = await Todos.deleteTodo(id)
        if(response.status === 200) {
            dispatch(actions.deleteTodo(response.data._id))
        }
    }
}
export const updateTodo = (todo:Todo):ThunkType => {
    return async (dispatch) => {
        const response = await Todos.updateTodo(todo)
        if(response.status === 200) {
            dispatch(actions.setStatus(response.data._id))
        }
    }
}
export default planReducer