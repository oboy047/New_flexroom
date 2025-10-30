export interface Room {
  id: number;
  title: string;
  city?: string;
  description?: string;
  pricePerHour: number;
  capacity: number;
}

// API-url fra .env, fallback til localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// ✅ Hent alle rom
export async function getRooms(): Promise<Room[]> {
  try {
    const res = await fetch(`${API_URL}/rooms`);
    if (!res.ok) throw new Error("Feil ved henting av rom");
    return await res.json();
  } catch (err) {
    console.error("❌ getRooms feil:", err);
    return [];
  }
}

// ✅ Hent ett rom
export async function getRoomById(id: number): Promise<Room | null> {
  try {
    const res = await fetch(`${API_URL}/rooms/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("❌ getRoomById feil:", err);
    return null;
  }
}
