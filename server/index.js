import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Koble til Railway-databasen
let db;
async function connectDB() {
  try {
    db = await mysql.createConnection(process.env.DATABASE_URL);
    console.log("✅ Koblet til Railway-databasen!");
  } catch (error) {
    console.error("❌ Kunne ikke koble til databasen:", error);
    process.exit(1);
  }
}
await connectDB();

// ✅ Hent ALLE rom
app.get("/rooms", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM rooms");
    res.json(rows);
  } catch (err) {
    console.error("❌ Databasefeil:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ Hent ETT rom via id
app.get("/rooms/:id", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM rooms WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: "Rom ikke funnet" });
    res.json(rows[0]);
  } catch (err) {
    console.error("❌ Databasefeil:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// 🚀 Start serveren
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server kjører på port ${PORT}`));
