export interface Room {
  id: number;
  title: string;
  city?: string;
  description?: string;
  pricePerHour: number;
  capacity: number;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// ✅ Hent ALLE rom
export async function getRooms(): Promise<Room[]> {
  const res = await fetch(`${API_URL}/rooms`);
  if (!res.ok) throw new Error("Feil ved henting av rom");
  return await res.json();
}

// ✅ Hent ETT rom
export async function getRoomById(id: number): Promise<Room | null> {
  const res = await fetch(`${API_URL}/rooms/${id}`);
  if (!res.ok) return null;
  return await res.json();
}
