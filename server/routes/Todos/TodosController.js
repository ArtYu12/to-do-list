const TodosService = require("./TodosService")

class TodosController {
    async getTodos(req,res){
        try {
            const todos = await TodosService.getTodos()
            return res.json(todos)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    } 
    async setTodo(req,res){
        try {
            const todo = await TodosService.setTodo(req.body)
            return res.json(todo)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    } 
    async deleteTodo(req,res){
        try {
            const todo = await TodosService.deleteTodo(req.params.id)
            return res.json(todo)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }
    async updateTodo(req,res){
        try {
            const todo = await TodosService.updateTodo(req.params.id)
            return res.json(todo)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }
}

module.exports = new TodosController()