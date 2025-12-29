
import { GoogleGenAI } from "@google/genai";

export const getAssistantResponse = async (prompt: string, context: string) => {
  // Safe extraction of API KEY
  const apiKey = typeof process !== 'undefined' ? (process.env.API_KEY || "") : "";
  
  if (!apiKey) {
    return "L'assistant est en mode démonstration. Veuillez configurer une clé API pour obtenir des réponses réelles.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Tu es un assistant IA d'élite, conçu avec la philosophie d'excellence d'Apple, pour la plateforme Orchestra Intelligence. 
        Ton ton est minimaliste, pur, rassurant et extrêmement précis.
        Contexte : ${context}.
        Ta mission : Transformer l'anxiété du terrain en sérénité opérationnelle par des conseils concrets et empathiques.
        Format : Réponses courtes (max 3 phrases), impactantes.`,
        temperature: 0.6,
      },
    });

    return response.text || "Je n'ai pas pu formuler de réponse. Veuillez réessayer.";
  } catch (error) {
    console.error("Gemini System Error:", error);
    return "Une perturbation temporaire empêche la connexion à l'intelligence centrale.";
  }
};
