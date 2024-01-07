import OpenAI from "openai";
const dotenv = require('dotenv');
import { Interview } from '../models/InterviewModel';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const startChat = async (historyChat: any[], endInterview: boolean | undefined, userId: string) => {

  if (historyChat && !endInterview) {
    const respuestaIA = await sendMessageToChatGpt(historyChat);
    return respuestaIA;
  }

  if (historyChat && endInterview) {
    const finalEvaluation = {
      role: "user", content: "Dame una devolucion final sobre el candidato, marcando puntos fuertes y debiles"
    };
    historyChat.push(finalEvaluation);
    const respuestaIA = await sendMessageToChatGpt(historyChat);
    const interviewMongo = await Interview.create({ userId: userId, assessment: respuestaIA[respuestaIA.length - 1].content, interview: JSON.stringify(respuestaIA) });

    return "Entrevista finalizada";
  }

  const mensajeInicial = "Inicia una entrevista conversacional para un candidato de trabajo, simulando que sos un reclutador llamado recruitFlow. la entrevista sera para un puesto de desarrollador fullStack ssr, explicale que la entrevista constara de tres etapas, datos personales, experiencia laboral y juego de rol. Arranca la entrevista preguntandole sobre sus datos personales.";
  const conversationHistory = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: mensajeInicial },
  ];
  const respuestaIA = await sendMessageToChatGpt(conversationHistory);
  return respuestaIA;
};


const sendMessageToChatGpt = async (conversationHistory: any[]) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: conversationHistory,
  });
  conversationHistory.push({
    role: "system", content: completion.choices[0].message.content
  })
  return conversationHistory;
};

module.exports = {
  sendMessageToChatGpt,
  startChat,
};
