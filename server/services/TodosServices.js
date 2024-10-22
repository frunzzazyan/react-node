class TodosServices{
    constructor(models){
        this.models = models
    }
    async getTodos() {
        const todos = await this.models.todos.find()
        return todos        
    }

    async postTodos(body) {
        const todos = await this.models.todos({...body , completed : false})
        const newTodo = await todos.save()
        return newTodo
    }
}

module.exports = TodosServices