import express from "express";
import "dotenv/config";
import cors from "cors";
import logger from "pino-http";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(logger());

app.get("/notes", (req, res) => {
  res.status(200).json({ message: "Retrieved all notes" });
});

app.get("/notes/:noteId", (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});

app.get("/test-error", (req, res) => {
  throw new Error("Simulated server error");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
