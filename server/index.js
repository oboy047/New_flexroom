import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = await mysql.createConnection(process.env.DATABASE_URL);

// ✅ Get all rooms
app.get("/rooms", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM rooms");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ Get single room
app.get("/rooms/:id", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM rooms WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: "Room not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
