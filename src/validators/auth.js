const { check } = require('express-validator')
const db = require('../db')
const { compare } = require('bcryptjs')

//password
const password_hash = check('password_hash')
  .isLength({ min: 6, max: 15 })
  .withMessage('Password has to be between 6 and 15 characters.')

//email
const email = check('email')
  .isEmail()
  .withMessage('Please provide a valid email.')

//check if email exists
const emailExists = check('email').custom(async (value) => {
  const { rows } = await db.query('SELECT * from usuarios WHERE email = $1', [
    value,
  ])

  if (rows.length) {
    throw new Error('Email already exists.')
  }
})

//login validation
const loginFieldsCheck = check('email').custom(async (value, { req }) => {
  const user = await db.query('SELECT id, email, password_hash from usuarios WHERE email = $1', [value])

  if (!user.rows.length) {
    throw new Error('Email does not exists.')
  }

  const validPassword = await compare(req.body.password_hash, user.rows[0].password_hash)

  if (!validPassword) {
    throw new Error('Wrong password')
  }

  req.user = user.rows[0];

})

module.exports = {
  registerValidation: [email, password_hash, emailExists],
  loginValidation: [loginFieldsCheck],
}
