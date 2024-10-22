var express = require('express');
var router = express.Router();

const TodosControllers = require("../controllers/TodosControllers.js")
const controllers = new TodosControllers()
/* GET home page. */
router.get('/', controllers.getTodos);
router.post("/todos", controllers.postTodos)
router.patch("/:id", (req,res)=>{
    console.log(req.params.id)
    res.json("hello")
})

module.exports = router;
