import { Todo } from "../../components/planPage/types/types.ts"
import { instanse } from "../api.ts"


export const Todos = {
    getTodos() {
        return instanse.get('/todos')
    },
    setTodo(todo:Todo) {
        return instanse.post('/todos',todo)
    },
    deleteTodo(id:number) {
        return instanse.delete(`/todos/${id}`)
    },
    updateTodo(todo:Todo) {
        return instanse.put(`/todos/${todo._id}`)
    },
}