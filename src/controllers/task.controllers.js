const pool = require('../db')

const getTasks = async (req, res) => {
    
    try{

        const {id} = req.params
    const sinlgeTask = await pool.query('SELECT * FROM task WHERE id = $1', [id])
    

    if (sinlgeTask.rows.length === 0)
         return res.status(404).json({
            message: 'Task not found'
    })
    
    res.json(sinlgeTask.rows[0])

    } catch (error) {
        console.log(error.message)
    }

}

const getAlltasks = async (req, res) => {
    try{

        const allTask = await pool.query('SELECT * FROM task')
    res.json(allTask.rows)

    } catch (error){
        next(error)
    }
}

const postAlltasks = async (req, res) => {
    const { title, description} = req.body;

    try{

        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description,])
    res.json(result.rows[0])

    } catch (error){
        next(error)
    }
}
const deleteTasks = async (req, res) => {

    const{ id } = req.params

    const result = await pool.query('DELETE FROM task WHERE id = $1 RETURNING *', [id])

    if (result.rowCount === 0)
    return res.status(404).json({
       message: 'Task not found'
    });

  return  res.sendStatus(204);
}
const updateTasks = async (req, res) => {
    const{ id } = req.params

    const result = await pool.query('UPDATE FROM task SET title = $1, description =$2 WHERE ID = $3 RETURNING *', [title, description, id])
    
    if (result.rowCount === 0)
        return res.status(404).json({
        message: 'Task not found'
        });
    
        return res.json(result.rows[0])

    
}

module.exports = {
    getAlltasks,
    getTasks,
    postAlltasks,
    deleteTasks,
    updateTasks
}