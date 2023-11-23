const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT, CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')

const taskRoutes = require('./routes/task.routes')
require('./middlewares/passport-middleware')


const app = express();


app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(passport.initialize())
const authRoutes = require('./routes/auth')

app.use('/api', authRoutes)
app.use(taskRoutes)

app.use((err, req, res, next) => {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  });  

app.listen(4000)
console.log('Server on port 4000')