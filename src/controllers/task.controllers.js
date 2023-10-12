const pool = require('../db')

const getTasks = async (req, res) => {
    res.send('retrieving a single tasks');
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
const deleteAlltasks = async (req, res) => {
    res.send('deleting a task');
}
const updateAlltasks = async (req, res) => {
    res.send('updating a task');
}

module.exports = {
    getAlltasks,
    getTasks,
    postAlltasks,
    deleteAlltasks,
    updateAlltasks
}