const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const { connection } = require('./dbConnection/dbConnection');

//importar rutas
const userRoutes = require('./routes/User.routes');
const interviewRoutes = require('./routes/Interview.routes');

// Cargamos las variables de entorno desde el archivo .env.
dotenv.config();

// Creamos una instancia de la aplicación Express.
const app = express();

const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//instanciar rutas
app.use('/users', userRoutes);
app.use('/interviews', interviewRoutes);

// Iniciamos el servidor y nos suscribimos al evento de escucha del puerto.
app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});

// Inicia la conexión a la base de datos
connection();
