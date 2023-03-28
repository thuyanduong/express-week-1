const express = require("express")
const router = express.Router() 
const taskController = require("./controller")

router.get("/tasks", taskController.getAllTasks)
router.get("/tasks/:id", taskController.findTask)
router.post("/tasks", taskController.createTask)
router.patch("/tasks/:id", taskController.completeTask)
router.delete("/tasks/:id", taskController.deleteTask)

module.exports = router