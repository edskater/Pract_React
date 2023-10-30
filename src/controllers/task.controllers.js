const pool = require('../db')



const getEntidades = async (req, res) => {
    try{

        const allTask = await pool.query('SELECT entidad from public.catalogo_entidades')
    res.json(allTask.rows)

    } catch (error){
        next(error)
    }
}



module.exports = {
    getEntidades
}