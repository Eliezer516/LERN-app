const { Router } = require("express")
const router = Router()

const { getAllTask, getAllTaskById, createNewTask, deleteTaskById, updateTask } = require("../controllers/task.contoller")

router.get("/", getAllTask)
router.get("/:id", getAllTaskById)
router.post("/", createNewTask)
router.put("/:id", updateTask)
router.delete("/:id", deleteTaskById)

module.exports = router
