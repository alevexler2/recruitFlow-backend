import { Request, Response } from 'express';

const {
  startChat,
} = require('../services/Interview.Service');

const iniciarConversacion = async (req: Request, res: Response) => {
  try {
    const { historyChat, endInterview, userId } = req.body;
    const respuestaIA = await startChat(historyChat, endInterview, userId);
    res.json({ respuestaIA });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar la conversación con ChatGPT.' });
  }
};

module.exports = {
  iniciarConversacion,
};
