// src/pages/Landing.tsx

const ACCENT = {
  from: "from-[#6F4CF6]", // dyp lilla
  via: "via-[#8D6BFA]",
  to: "to-[#B39CFF]",
  solid: "#7C66F5",
};

const cities = [
  {
    name: "Oslo",
    description: "Fleksible møterom i hele byen.",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Bergen",
    description: "Moderne rom nær sentrum og Bryggen.",
    image:
      "https://images.unsplash.com/photo-1581527025148-cf1ee51d5a8b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Trondheim",
    description: "Lyst og luftig – klare til workshop.",
    image:
      "https://images.unsplash.com/photo-1564673563303-d6cbd7a40c8b?q=80&w=1400&auto=format&fit=crop",
  },
];

const features = [
  {
    title: "Enkel booking",
    text: "Finn rom og reserver på få sekunder – helt uten e-post frem og tilbake.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7V3M16 7V3M4 11h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Rett pris",
    text: "Transparente priser per time eller dag – ingen overraskelser.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8c-2.21 0-4 .895-4 2s1.79 2 4 2 4 .895 4 2-1.79 2-4 2m0-10v10m0 4v-2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Skalerbart",
    text: "Små møter eller store arrangement – vi har plass til begge.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
      </svg>
    ),
  },
];

export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className={`relative overflow-hidden bg-gradient-to-r ${ACCENT.from} ${ACCENT.via} ${ACCENT.to}`}>
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-20 md:flex-row md:py-28">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl">
              Finn ditt perfekte møterom
            </h1>
            <p className="mt-4 max-w-xl text-white/90">
              Rask og enkel booking for bedrifter og privatpersoner. Søk, filtrer og reserver – alt på ett sted.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cities" className="rounded-2xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm transition hover:shadow">
                Utforsk rom
              </a>
              <a href="/login" className="rounded-2xl bg-black/20 px-5 py-3 font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-black/25">
                Logg inn
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
                alt="Møterom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-gray-200">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CITY CARDS */}
      <section id="cities" className="mx-auto max-w-7xl px-4 pb-4 pt-2">
        <h2 className="mb-6 text-2xl font-semibold">Populære områder</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cities.map((c) => (
            <div key={c.name} className="group rounded-[28px] shadow-xl ring-1 ring-gray-100 overflow-hidden">
              <img src={c.image} alt={c.name} className="h-96 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="p-6 -mt-20 relative text-white">
                <h3 className="text-3xl font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-gray-100">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
