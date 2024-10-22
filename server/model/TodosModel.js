const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true 
    },
    completed : {
        type : Boolean,
        required : true
    } 
})

module.exports = mongoose.model("todos", TodosSchema)
