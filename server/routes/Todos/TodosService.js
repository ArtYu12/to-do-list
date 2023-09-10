const Todos = require("../../Schemas/Todos")


class TodosService {
    async getTodos(){
        const todos = await Todos.find()
        return todos
    } 
    async setTodo(todo){
        const todoNew = await Todos.create(todo)
        return todoNew
    } 
    async deleteTodo(id){
        const todo = await Todos.findByIdAndDelete(id)
        return todo
    } 
    async updateTodo(id){
        const oldTodo = await Todos.findById(id)
        const todo = await Todos.findByIdAndUpdate(id, {completed:!oldTodo.completed},{new:true})
        return todo
    } 
}

module.exports = new TodosService()