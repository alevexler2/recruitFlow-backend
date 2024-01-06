import express from 'express';

const {
  createUser,
} = require('../controller/User.controller');

const userRoute = express();

userRoute.post('/', createUser);

module.exports = userRoute;