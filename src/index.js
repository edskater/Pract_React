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

  // Ruta para detectar los periféricos
app.get("/peripherals", (req, res) => {
  const peripherals = detectPeripherals();
  res.json(peripherals);
});

// Función para detectar los periféricos
const detectPeripherals = () => {
  const fingerprintReader = detectFingerprintReader();
  const webcam = detectWebcam();
  const irisCapture = detectIrisCapture();
  const scanner = detectScanner();

  return [fingerprintReader, webcam, irisCapture, scanner];
};

// Funciones para detectar los periféricos específicos
const detectFingerprintReader = () => {
  // Código para detectar el lector de huellas digitales
  // ...
  return { name: "Fingerprint Reader" };
};

const detectWebcam = () => {
  // Código para detectar la cámara web
  // ...
  return { name: "Webcam" };
};

const detectIrisCapture = () => {
  // Código para detectar la capturadora de iris
  // ...
  return { name: "Iris Capture" };
};

const detectScanner = () => {
  // Código para detectar el escáner
  // ...
  return { name: "Scanner" };
};
  

app.listen(4000)
console.log('Server on port 4000')