const Task = require("./model")

const getAllTasks = (req, res) => {
    res.send(Task.all)
}   

const createTask = (req, res) => {
    const {title, description} = req.body
    const newTask = new Task(title, description)
    res.send(newTask)
}   

const findTask = (req, res) => {
    const id = Number(req.params.id)
    const task = Task.find(id)
    if(task){
        Task.find(id)
        res.send(task)
    }else{
        res.sendStatus(404)
    }
}   

const deleteTask = (req, res) => {
    const id = Number(req.params.id)
    const task = Task.find(id)
    if(task){
        Task.delete(id)
        res.sendStatus(204)
    }else{
        res.sendStatus(404)
    }
}   

const completeTask = (req, res) => {
    const id = Number(req.params.id)
    const task = Task.find(id)
    if(task){
        Task.complete(id)
        res.send(task)
    }else{
        res.sendStatus(404)
    }
}   

module.exports = {
    getAllTasks, 
    createTask, 
    completeTask, 
    findTask, 
    deleteTask
}
