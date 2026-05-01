import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Meta Conversions API Proxy
  app.post("/api/meta-event", async (req, res) => {
    const { eventName, eventSourceUrl, userData } = req.body;
    
    const pixelId = process.env.META_PIXEL_ID || "836093969544174";
    const token = process.env.META_CAPI_TOKEN;

    if (!token) {
      console.error("META_CAPI_TOKEN is missing in environment");
      return res.status(500).json({ error: "Server configuration error" });
    }

    try {
      const response = await axios.post(
        `https://graph.facebook.com/v17.0/${pixelId}/events`,
        {
          data: [
            {
              event_name: eventName,
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_source_url: eventSourceUrl,
              user_data: {
                client_ip_address: req.ip,
                client_user_agent: req.headers["user-agent"],
                ...userData
              }
            }
          ],
          access_token: token
        }
      );

      res.json({ success: true, metaResponse: response.data });
    } catch (error: any) {
      console.error("Meta CAPI Error:", error.response?.data || error.message);
      res.status(500).json({ error: "Failed to send event to Meta", details: error.response?.data });
    }
  });

  // Vite middleware for development
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
