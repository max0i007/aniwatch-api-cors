import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const corsConfig = cors({
  origin: "*",  // This allows requests from any origin
  allowMethods: ["GET"],
  maxAge: 600,
  credentials: false  // Must be false when using origin: "*"
});

export default corsConfig;
