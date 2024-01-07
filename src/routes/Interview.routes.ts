import express from 'express';

const { iniciarConversacion } = require('../controller/Interview.controller');

const userRoute = express();

userRoute.post('/start-interview', iniciarConversacion);

module.exports = userRoute;
