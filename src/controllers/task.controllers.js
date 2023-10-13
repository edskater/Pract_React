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
        res.json({error: error.message});
    }
}

const postAlltasks = async (req, res) => {
    const { title, description} = req.body;

    try{

        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description,])
    res.json(result.rows[0])

    } catch (error){
        res.json({error: error.message});
    }
}
const deleteTasks = async (req, res) => {

    const{ id } = req.params

    const result = await pool.query('DELETE FROM task WHERE id = $1 RETURNING *', [id])

    console.log(result)

    res.send('deleting a task');
}
const updateTasks = async (req, res) => {
    res.send('updating a task');
}

module.exports = {
    getAlltasks,
    getTasks,
    postAlltasks,
    deleteTasks,
    updateTasks
}