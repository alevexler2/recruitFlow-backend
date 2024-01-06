import admin from 'firebase-admin';

const serviceAccount = require("./serviceAccountKey.json");


export const firebaseConnection = () => {
  try {

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      console.log('Conexión a Firebase exitosa');
    }
  } catch (error) {
    console.error('Error al conectar con Firebase:', error);
  }
};
