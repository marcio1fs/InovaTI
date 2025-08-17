
import { GoogleGenAI, Type } from "@google/genai";
import { BrandIdentity } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    companyName: {
      type: Type.STRING,
      description: "A creative and catchy name for the company."
    },
    slogan: {
      type: Type.STRING,
      description: "A short, memorable slogan for the brand."
    },
    colorPalette: {
      type: Type.ARRAY,
      description: "An array of 5 complementary hex color codes (e.g., '#RRGGBB').",
      items: {
        type: Type.STRING
      }
    }
  },
  required: ["companyName", "slogan", "colorPalette"]
};

export const generateBrandIdentity = async (businessIdea: string): Promise<BrandIdentity> => {
  try {
    const prompt = `
      Act as a world-class branding expert. Based on the following business idea, generate a unique and compelling brand identity.
      The brand identity should include a company name, a slogan, and a color palette of 5 hex codes.
      Ensure the output is a valid JSON object that strictly adheres to the provided schema.

      Business Idea: "${businessIdea}"
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    // Validate that the response is not empty
    if (!jsonText) {
      throw new Error("Received an empty response from the AI.");
    }
    const parsedJson = JSON.parse(jsonText);

    // Basic validation
    if (!parsedJson.companyName || !parsedJson.slogan || !Array.isArray(parsedJson.colorPalette)) {
      throw new Error("AI response is missing required fields.");
    }

    return parsedJson as BrandIdentity;

  } catch (error) {
    console.error("Error generating brand identity:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate brand identity: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the brand identity.");
  }
};
