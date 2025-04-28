import express, { Request, Response } from "express";
import axios from "axios";
import path from "path";
import cors from "cors";

const app = express();
const PORT = 5000;

// Allow frontend (localhost:3000) to call this backend
app.use(cors());
app.use(express.json());

// Example route to proxy the API
app.get("/api/todos", async (req: Request, res: Response) => {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await axios.get(`${url}`);
    res.json({ data: response.data });
  } catch (error: any) {
    console.error("Error fetching from real server:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const __dirnamePath = path.resolve();
app.use(express.static(path.join(__dirnamePath, "dist")));

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://localhost:${PORT}`);
});
