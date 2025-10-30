// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { getRooms, type Room } from "../services/roomService";
import { Link } from "react-router-dom";
import '../index.css';

export default function Home() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRooms()
      .then(setRooms)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
     <section className="hero">
  <h2>Finn ditt perfekte møterom</h2>
  <p>Rask og enkel booking for alle</p>
</section>

<section>
  <h2>Tilgjengelige rom</h2>
  {loading ? (
    <p className="loading">Laster rom…</p>
  ) : rooms.length === 0 ? (
    <p className="no-rooms">Ingen rom registrert enda.</p>
  ) : (
    <div className="room-grid">
      {rooms.map((room) => (
        <Link to={`/rooms/${room.id}`} key={room.id} className="room-card">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
            alt={room.title}
          />
          <div className="info">
            <h3>{room.title}</h3>
            <p>{room.city ?? "Ukjent by"}</p>
            <small>
              {room.pricePerHour} kr/time • 👥 {room.capacity} pers
            </small>
          </div>
        </Link>
      ))}
    </div>
  )}
</section>

    </main>
  );
}
