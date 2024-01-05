const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
