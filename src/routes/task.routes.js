const { Router } = require("express");
const { getAlltasks, getTasks, postAlltasks, deleteAlltasks, updateAlltasks } = require('../controllers/task.controllers')

const router = Router();

router.get ('/tasks/10', getTasks)

router.get ('/tasks', getAlltasks)

router.post ('/tasks', postAlltasks )

router.delete ('/tasks', deleteAlltasks )

router.put ('/tasks', updateAlltasks)

module.exports = router;