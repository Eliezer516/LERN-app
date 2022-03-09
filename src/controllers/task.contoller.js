const { getConnection } = require("../database")
const format = require('date-fns/format');
const { v4 } = require("uuid")

const getAllTask = (req, res) => {
  const tasks = getConnection().get("tasks").value()
  res.json(tasks)
}

const getAllTaskById = (req, res) => {
  const task = getConnection().get("tasks").find({id: req.params.id}).value()
  res.json(task)
}

const createNewTask = async (req, res) => {
  const newTask = {
    title: req.body.title,
    description: req.body.description,
    quantily: req.body.quantily,
    id: v4(),
    hourStamp: format(new Date(), "k:mm:ss"),
    timeStamp: format(new Date(), "eeee ee MMMM, k:mm:ss aaaa")
  }
  
  const result = await getConnection().get("tasks").push(newTask).write()
  res.json(result)
}

const deleteTaskById = async (req, res) => {
  const result = await getConnection().get('tasks').remove({id: req.params.id}).write()
  const tasks = getConnection().get("tasks").value()
  res.json(tasks)
}

const updateTask = async (req, res) => {
  const result = await getConnection().get("tasks").find({id: req.params.id}).assign(req.body).write()
  const tasks = getConnection().get("tasks").value()
  res.json(tasks)
  console.log(tasks)
}

module.exports = {
  getAllTask,
  getAllTaskById,
  createNewTask,
  deleteTaskById,
  updateTask
}
