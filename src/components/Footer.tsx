// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} FlexRoom – Alle rettigheter forbeholdt
      </div>
    </footer>
  );
}
