class TodosControllers{
     async getTodos (req,res){
        try {
            const todos = await req.app.locals.services.todos.getTodos()
            res.json(todos)
        } catch (error) {
            res.status(404).json("err")
        }
     }
     async postTodos(req,res){
        try {
            const newTodo = await req.app.locals.services.todos.postTodos(req.body)
            res.json(newTodo)
        } catch (error) {
            res.status(404).json(error)
        }
     }

     async patchTodos(req,res){
        try {
            res.json(req.params.id)
        } catch (error) {
            res.json(error)
        }
     }
}

module.exports = TodosControllers