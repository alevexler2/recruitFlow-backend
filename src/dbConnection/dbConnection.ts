const mongoose = require('mongoose');

export const connection = async () => {
  try {
    const conectionString = process.env.CONECTION_STRING;
    await mongoose.connect(conectionString);
    console.log('Conexion exitosa');
  } catch (error) {
    console.log(error)
  }
}
