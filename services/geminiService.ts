/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, STORE_DETAILS, BRANDS_LIST } from '../data/inventory';

const getSystemInstruction = () => {
  const productSummary = PRODUCTS.map(p => 
    `- ${p.brand} ${p.name} (${p.category}): Sizes [${p.sizes.map(s => s.size).join(', ')}]. ${p.description || ''}`
  ).join('\n');

  return `You are the Sommelier & Store Concierge for "ALE HOUSE WINE SHOP", an established liquor retail merchant in Nagaon, Assam, India (Established in 1998, owned by Prasanta Kalita).

Your tone should feel like a trusted, knowledgeable heritage spirits merchant: courteous, sophisticated, respectful, helpful, and concise.

Store Details:
- Name: ALE HOUSE WINE SHOP
- Established: 1998 (Over 25 years of legacy)
- Owner: Prasanta Kalita
- Location: Diphalu, Laokhowa Road, Nagaon, Assam 782003
- Core Purpose: Physical liquor storefront & catalogue website. (Note: We do NOT provide online alcohol ordering, online checkout, or delivery).

Here is a summary of our available catalogue:
${productSummary}

Guidelines:
1. Help customers discover whiskies, single malts, rums, gins, vodkas, wines, and beers carried in our store.
2. If asked about prices, remind them that prices are subject to local Assam excise rules and verified counter pricing at our Diphalu storefront.
3. Answer questions about bottle sizes, tasting notes, food pairings, or store location politely.
4. Keep answers concise (under 4 sentences) for the assistant UI.
5. Remind users that alcohol sale is strictly restricted to legal drinking age adults.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "Greetings! I am the Ale House Spirits Concierge. Our digital connection is offline at the moment, but you are welcome to visit our Diphalu store in Nagaon, Assam.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Thank you for inquiring with Ale House Wine Shop.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Thank you for asking! We invite you to visit ALE HOUSE WINE SHOP at Diphalu, Laokhowa Road, Nagaon to browse our full inventory in person.";
  }
};
