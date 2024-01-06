import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

export const firebaseConnection = () => {
  try {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;

    if (!privateKey) {
      throw new Error('The FIREBASE_PRIVATE_KEY environment variable is not defined.');
    }

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
      });
      console.log('Conexión a Firebase exitosa');
    }
  } catch (error) {
    console.error('Error al conectar con Firebase:', error);
  }
};
