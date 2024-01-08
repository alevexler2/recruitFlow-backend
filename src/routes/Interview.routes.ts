import express from 'express';

const { iniciarConversacion } = require('../controller/Interview.controller');

const userRoute = express();

userRoute.post('/', iniciarConversacion);

module.exports = userRoute;
