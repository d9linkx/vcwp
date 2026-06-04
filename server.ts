import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of Gemini 
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      console.warn("GEMINI_API_KEY is not configured or is the default placeholder. Falling back to mock Vibe generator.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Interactive API Vibe Playground endpoint
app.post("/api/vibe-translate", async (req, res) => {
  const { prompt, category } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  const client = getGeminiClient();

  if (!client) {
    // Elegant fallback mock answers that are highly tailored to Nigerian culture and context
    const mockResponses: Record<string, any> = {
      default: {
        appName: "Naira Splitter (Simple Expense Splitter)",
        friendlyExplanation: "This is a super simple app to calculate who owe who when friends go eat suya or drink coke. Instead of writing heavy database coding, we use a plain list logic to split the bill sharp-sharp. High vibe coding, no stress!",
        codeSnippet: `// 100% Vibe Coded
function NairaSplitter() {
  const [total, setTotal] = useState(10000);
  const [peeps, setPeeps] = useState(4);
  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold">₦{total} split among {peeps} friends</h3>
      <p className="text-xl text-emerald-600 font-extrabold mt-2">₦{total / peeps} per head!</p>
    </div>
  );
}`,
        previewElements: ["Bill input box", "Friends slider counter", "₦ Value display badge"],
        actionLabel: "Try Splitting Now"
      },
      calculator: {
        appName: "Simple Interest & Esusu Planner",
        friendlyExplanation: "Keep track of interest when your team is doing Esusu contribution. In old coding, you need 2 weeks of writing servers. Here, we just vibe the calculation instantly in your browser, no long cap!",
        codeSnippet: `// Quick Esusu Interest Calculator
function EsusuCal() {
  const [principal, setPrincipal] = useState(50000);
  const [interest, setInterest] = useState(10); // 10%
  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
      <h3 className="text-lg font-semibold">Total Esusu Goal: ₦{principal}</h3>
      <p className="text-slate-500">Interest rate: {interest}%</p>
      <div className="mt-4 text-emerald-600 text-2xl font-bold">₦{principal + (principal * interest / 100)} payout!</div>
    </div>
  );
}`,
        previewElements: ["Monthly share selector", "Member count dial", "Payout ticker card"],
        actionLabel: "Calculate payout"
      },
      shop: {
        appName: "WhatsApp Shop-Link Builder",
        friendlyExplanation: "A fast way to help physical shop owners in Balogun or Alaba generate direct WhatsApp product links with prices. It vibes up the link automatically so buyers can click and order what they want!",
        codeSnippet: `// WhatsApp Direct Order clicker
function WAOrder() {
  const [item, setItem] = useState("Lace Fabric");
  const [price, setPrice] = useState("35,000");
  const whatsappUrl = \`https://wa.me/2348000000000?text=I%20want%20to%20buy%20\${item}%20for%20NGN\${price}\`;
  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
      <p className="text-sm">Buyer clicks to message your WhatsApp instantly with purchase confirmation!</p>
      <a href={whatsappUrl} className="mt-4 inline-block bg-emerald-600 text-white px-4 py-2 rounded">Order item now</a>
    </div>
  );
}`,
        previewElements: ["Product name field", "Price selector in Naira", "WhatsApp click action link"],
        actionLabel: "Launch order clicker"
      }
    };

    let selectedFallback = mockResponses.default;
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes("calculator") || lowerPrompt.includes("esusu") || lowerPrompt.includes("interest") || lowerPrompt.includes("math")) {
      selectedFallback = mockResponses.calculator;
    } else if (lowerPrompt.includes("shop") || lowerPrompt.includes("market") || lowerPrompt.includes("whatsapp") || lowerPrompt.includes("sell")) {
      selectedFallback = mockResponses.shop;
    }

    return res.json({
      ...selectedFallback,
      isMock: true,
      message: "Showing simulated output because GEMINI_API_KEY is not configured yet. Configure your secret to receive direct, fully custom generations!"
    });
  }

  try {
    const systemPrompt = `You are a friendly Vibe Coding assistant explaining coding in an extremely relatable, light, and encouraging Nigerian style.
Your target audience is Nigerian beginners of all ages. You want them to feel like coding of the modern era is zero stress, fully accelerated by AI and words ("vibe").
Translate technical heavy words (like database, asynchronous, API, arrays) into lightweight terms using light Nigerian colloquial words like "ogbonge", "sharp-sharp", "no stress", "akube", "cap", "suya", "Esusu".
Suggest a specific simple React/Tailwind frontend concept that meets their exact prompt.

Write your response strictly adhering to the JSON schema specified. Do not include markdown wraps around the JSON block.`;

    const userInstructions = `User wants to build: "${prompt}" (Category: ${category || "General concept"}).
Provide a fully styled modern React-like component structure, a friendly explanation formatted with friendly phrases, preview elements to show, and a quick functional button label.`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        { text: systemPrompt },
        { text: userInstructions }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            appName: {
              type: Type.STRING,
              description: "A cool, fun, descriptive title for the generated app."
            },
            friendlyExplanation: {
              type: Type.STRING,
              description: "Extremely warm and readable explanation of how this app works using friendly Nigerian phrases as specified, targeting total beginners of all ages."
            },
            codeSnippet: {
              type: Type.STRING,
              description: "A short, readable code snippet (React/Tailwind block) implementing this vibe."
            },
            previewElements: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 simple, highly visual client-side elements we will render dynamically in a live interactive card."
            },
            actionLabel: {
              type: Type.STRING,
              description: "A short action button text to display for the demo (e.g. 'See Splitting Results', 'Send WhatsApp Alert')"
            }
          },
          required: ["appName", "friendlyExplanation", "codeSnippet", "previewElements", "actionLabel"]
        }
      }
    });

    const parsedData = JSON.parse(response.text?.trim() || "{}");
    return res.json({
      ...parsedData,
      isMock: false
    });

  } catch (error: any) {
    console.error("Gemini API Error in vibe-translate:", error);
    return res.status(500).json({ error: "Failed to generate AI response: " + error.message });
  }
});

// Proxy to push registration details to Google Apps Script if configure
app.post("/api/register-external", async (req, res) => {
  const { appsScriptUrl, details } = req.body;

  if (!appsScriptUrl) {
    return res.status(400).json({ error: "Apps Script URL not provided" });
  }

  try {
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    const bodyText = await response.text();
    return res.json({ success: true, text: bodyText });
  } catch (err: any) {
    console.error("External AppScript POST failed, but registration is saved locally:", err);
    // Return a soft error with success fallback to let clients know they can continue.
    return res.json({ 
      success: false, 
      error: err.message,
      message: "The server received the request but could not reach your Google Sheets Apps Script URL directly because of CORS/Network. Saved registration state locally!"
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Configure Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Vibe Server running on port ${PORT}`);
  });
}

startServer();
