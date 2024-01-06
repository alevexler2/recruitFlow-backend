import bcrypt from 'bcrypt';
import admin from 'firebase-admin';
import { firebaseConnection } from '../config/firebase-config';
import { User } from '../models/UserModel';

firebaseConnection();

const createUserService = async (name: string, lastName: string, email: string, password: string) => {
  const SALT_ROUNDS = 10;
  // Find out if a user with the same email already exists.
  const existingUserMongo = await User.findOne({ email });
  if (existingUserMongo) {
    return { error: 'Email already exists' };
  }

  // // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  console.log(hashedPassword)

  // Create the user in MongoDB.
  const userMongo = await User.create({ name, lastName, email, password: hashedPassword });

  // Create the user in Firebase Authentication.
  const userFirebase = await admin.auth().createUser({
    email,
    password,
    displayName: `${name} ${lastName}`,
  });

  return { user: userMongo, userFirebase };
};

module.exports = {
  createUserService,
};