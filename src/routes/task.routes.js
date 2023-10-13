const { Router } = require("express");
const { getAlltasks, getTasks, postAlltasks, deleteTasks, updateTasks } = require('../controllers/task.controllers')

const router = Router();

router.get ('/tasks/:id', getTasks)

router.get ('/tasks', getAlltasks)

router.post ('/tasks', postAlltasks )

router.delete ('/tasks/:id', deleteTasks )

router.put ('/tasks', updateTasks)

module.exports = router;