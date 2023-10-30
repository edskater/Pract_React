const { Router } = require("express");
const { getEntidades } = require('../controllers/task.controllers')

const router = Router();



router.get ('/entidades', getEntidades)


module.exports = router;