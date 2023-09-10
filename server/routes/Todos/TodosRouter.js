const TodosController = require("./TodosController");


const routerTodos = require("express").Router();

routerTodos.get("/todos",TodosController.getTodos)
routerTodos.post("/todos",TodosController.setTodo)
routerTodos.delete("/todos/:id",TodosController.deleteTodo)
routerTodos.put("/todos/:id",TodosController.updateTodo)

module.exports = routerTodos