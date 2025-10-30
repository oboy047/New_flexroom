// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// lag pool til Railway
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// test endpoint
app.get("/", (req, res) => {
  res.json({ ok: true, msg: "FlexRoom API ⛳️" });
});

// GET alle rom
app.get("/api/rooms", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, owner_id AS ownerId, title, description, price_per_hour AS pricePerHour, capacity, address, city, lat, lng, created_at AS createdAt FROM rooms ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error("Feil ved henting av rooms:", err);
    res.status(500).json({ error: "Kunne ikke hente rooms" });
  }
});

// GET ett rom
app.get("/api/rooms/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Ugyldig id" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT id, owner_id AS ownerId, title, description, price_per_hour AS pricePerHour, capacity, address, city, lat, lng, created_at AS createdAt FROM rooms WHERE id = ?",
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "Rom ikke funnet" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Feil ved henting av rom:", err);
    res.status(500).json({ error: "Kunne ikke hente rom" });
  }
});

// (valgfritt) POST booking – bare dummy for nå
app.post("/api/bookings", async (req, res) => {
  const { roomId, userId, startTime, endTime } = req.body;
  // her ville vi vanligvis INSERT til en bookings-tabell
  res.json({
    ok: true,
    bookingId: Math.floor(Math.random() * 100000),
    roomId,
    userId,
    startTime,
    endTime,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("✅ FlexRoom API kjører på port", PORT);
});
