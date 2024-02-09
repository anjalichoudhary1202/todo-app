const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anjali:Lsj77QAYNhwsqHId@cluster0.rbrrcyf.mongodb.net/week5TodoApp");
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo
}