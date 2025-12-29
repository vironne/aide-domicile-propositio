
import { GoogleGenAI } from "@google/genai";

// Safe access to API_KEY to prevent ReferenceError in browser environments
const getApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const getAssistantResponse = async (prompt: string, context: string) => {
  const apiKey = getApiKey();
  if (!apiKey) return "Veuillez configurer votre clé API pour tester l'assistant.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Tu es un assistant IA bienveillant conçu pour les équipes d'aide à domicile sous la plateforme Orchestra Intelligence. 
        Ton ton est calme, rassurant, professionnel et empathique.
        Ton objectif est de réduire le stress de l'utilisateur.
        Contexte actuel : ${context}. 
        Réponds de manière concise (max 3-4 phrases) et structurée.`,
        temperature: 0.7,
      },
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant.";
  }
};
