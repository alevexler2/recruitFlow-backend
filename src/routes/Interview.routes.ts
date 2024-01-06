import express from 'express';

const { } = require('../controller/Interview.controller');

const userRoute = express();

userRoute.post('/', () => { });
userRoute.put('/', () => { });
userRoute.get('/datos-personales', () => { });
userRoute.post('/datos-personales', () => { });
userRoute.get('/experiencia', () => { });
userRoute.post('/experiencia', () => { });
userRoute.post('/juego-rol', () => { });

module.exports = userRoute;
