//Bu dosyanın görevi:
//  Todo verisini almak
//  JSON olarak döndürmek

const getTodos = async (req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
};

const Todo =require("../models/todoModel");

const createTodo = async(req,res) => {
    try{
        const {title} = req.body;

        if (!title) {
            return res.status(400).json({error: "Title is required"});
        }

        const newTodo = await Todo.create({title});

        res.status(201).json(newTodo);
    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
};

const deleteTodo = async(req,res) => {
    try{
        const{id} = req.params;
        const deleteTodo = await Todo.findByIdAndDelete(id);
        if(!deleteTodo){
            return res.status(404).json({error: "Task not found"});
        }
        res.json({message: "Task deleted"});
    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
};

const updateTodo = async(req,res) => {
    try{
        const{id} = req.params;
        const{completed} = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {completed},
            {new: true}
        );
        if(!updateTodo){
            return res.status(404).json({error: "Task not found"});
        }
        res.json(updatedTodo);
    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
};

module.exports = {getTodos, createTodo, deleteTodo, updateTodo};