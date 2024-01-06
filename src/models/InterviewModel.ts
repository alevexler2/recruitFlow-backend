import { Schema, model, Types } from "mongoose";

const interviewSchema = new Schema({
  usuarioId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  datosPersonales: {
    nombre: String,
    email: String,
    fechaNacimiento: String,
    telefono: String,
    educacion: String,
    profesion: String,
  },
  experiencia: [{
    empresa: String,
    duracion: String,
    rol: String,
  }],
  evaluacionFinal: String,
});

export const Interview = model('Interview', interviewSchema); 
