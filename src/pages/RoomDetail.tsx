// src/pages/RoomDetail.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRoomById, type Room } from "../services/roomService";
import "../index.css";

export default function RoomDetail() {
  const { id } = useParams();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRoomById(Number(id))
      .then(setRoom)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Laster romdetaljer...</p>;
  if (!room) return <p>Rom ikke funnet.</p>;

  return (
    <main className="booking-page">
      <div className="room-card">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
          alt={room.title}
          className="room-image"
        />
        <div className="room-info">
          <h2>{room.title}</h2>
          <p className="room-city">{room.city}</p>
          <p className="room-price">
            💰 {room.pricePerHour} kr/time • 👥 {room.capacity} personer
          </p>
          <p className="room-description">
            {room.description ||
              "Dette er et moderne og komfortabelt møterom med alt du trenger for et effektivt møte."}
          </p>

          <form className="booking-form">
            <h3>📅 Book dette rommet</h3>
            <label>
              Starttid
              <input type="datetime-local" required />
            </label>
            <label>
              Sluttid
              <input type="datetime-local" required />
            </label>
            <button type="submit">Bekreft booking</button>
          </form>

          <Link to="/" className="back-btn">
            ← Tilbake
          </Link>
        </div>
      </div>
    </main>
  );
}
