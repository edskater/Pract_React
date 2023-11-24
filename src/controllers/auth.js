const db = require('../db')
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { SECRET } = require('../constants')

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query('select * from usuarios')

    return res.status(200).json({
      success: true,
      users: rows
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.register = async (req, res) => {
  const { password_hash, nombre, apellido_paterno, apellido_materno, email, estatus, created_by, created_at, rol } = req.body
  try {
    const hashedPassword = await hash(password_hash, 10)

    const resId = await db.query('insert into usuarios(password_hash,nombre,apellido_paterno,apellido_materno,email,estatus,created_by,created_at) values($1,$2,$3,$4,$5,$6,$7,$8) returning id', [
      hashedPassword, nombre, apellido_paterno, apellido_materno, email, estatus, created_by, created_at
    ])
    
    const userId = resId.rows[0].id;

    if (userId) {
      console.log('UserId: ',userId)
      await db.query('insert into usuario_auth(usuario_id,auth_name) values($1,$2)', [userId, rol])
      console.log('Ambas consultas completadas con éxito')
    } else {
      console.log('No se obtuvo un userId después de insertar en usuarios');
    }

    return res.status(201).json({
      success: true,
      message: 'The registraion was succefull',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.login = async (req, res) => {
  let user = req.user

  let payload = {
    id: user.id,
    email: user.email,
  }

  try {
    const token = await sign(payload, SECRET)

    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'Logged in succefully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out succefully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}
