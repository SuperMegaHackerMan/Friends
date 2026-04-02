const friends = [
  {
    name: "Alex",
    role: "The Photographer",
    description: "Always has a camera, never misses a moment.",
    placeholder: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alex&backgroundColor=b6e3f4",
    color: "bg-blue-100",
    border: "border-blue-300",
  },
  {
    name: "Jordan",
    role: "The Chef",
    description: "Turns every hangout into a food adventure.",
    placeholder: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jordan&backgroundColor=ffd5dc",
    color: "bg-pink-100",
    border: "border-pink-300",
  },
  {
    name: "Sam",
    role: "The Planner",
    description: "Has a spreadsheet for every trip we've ever taken.",
    placeholder: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sam&backgroundColor=c0aede",
    color: "bg-purple-100",
    border: "border-purple-300",
  },
  {
    name: "Morgan",
    role: "The Storyteller",
    description: "Remembers every detail of every story, always.",
    placeholder: "https://api.dicebear.com/9.x/adventurer/svg?seed=Morgan&backgroundColor=d1f4d1",
    color: "bg-green-100",
    border: "border-green-300",
  },
  {
    name: "Casey",
    role: "The Wild Card",
    description: "Suggests the most random ideas that somehow always work.",
    placeholder: "https://api.dicebear.com/9.x/adventurer/svg?seed=Casey&backgroundColor=ffd9b7",
    color: "bg-orange-100",
    border: "border-orange-300",
  },
  {
    name: "Riley",
    role: "The DJ",
    description: "Has a playlist for every mood, every time.",
    placeholder: "https://api.dicebear.com/9.x/adventurer/svg?seed=Riley&backgroundColor=ffe4b5",
    color: "bg-yellow-100",
    border: "border-yellow-300",
  },
];

const memories = [
  { label: "Road Trips", count: "12" },
  { label: "Concerts", count: "8" },
  { label: "Camping Nights", count: "24" },
  { label: "Inside Jokes", count: "∞" },
];

const galleryTiles = [
  { label: "New Year's Eve", sub: "Dec 2023", from: "from-purple-500", to: "to-pink-500" },
  { label: "Hiking Trip", sub: "May 2024", from: "from-green-500", to: "to-emerald-600" },
  { label: "Concert Night", sub: "Aug 2024", from: "from-orange-400", to: "to-red-500" },
  { label: "Camping Out", sub: "Jul 2024", from: "from-yellow-500", to: "to-orange-500" },
];

export default function Home() {
  return (
    <main className="min-h-dvh">

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span
            className="text-2xl font-bold text-[#2563EB]"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Our Crew
          </span>
          <div className="hidden sm:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-[#2563EB] transition-colors duration-200">About</a>
            <a href="#crew" className="hover:text-[#2563EB] transition-colors duration-200">The Crew</a>
            <a href="#gallery" className="hover:text-[#2563EB] transition-colors duration-200">Gallery</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60a5fa] text-white"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#F97316]/20 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wide backdrop-blur-sm border border-white/30">
            Est. 2019 · Still Going Strong
          </span>

          <h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Life is better
            <br />
            <span className="text-[#fed7aa]">with your crew.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 leading-relaxed mb-10">
            This is our little corner of the internet — a place to celebrate the
            friendships, adventures, and memories that make life truly worth living.
            Welcome to our world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#crew"
              className="px-8 py-3.5 rounded-2xl bg-[#F97316] text-white font-semibold text-base hover:bg-orange-500 transition-colors duration-200 shadow-lg shadow-orange-500/30"
            >
              Meet the Crew
            </a>
            <a
              href="#gallery"
              className="px-8 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white font-semibold text-base hover:bg-white/25 transition-colors duration-200 backdrop-blur-sm"
            >
              Our Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#1E293B] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {memories.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span
                  className="text-5xl font-bold text-[#F97316]"
                  style={{ fontFamily: "var(--font-caveat)" }}
                >
                  {item.count}
                </span>
                <span className="text-xs text-slate-400 font-semibold tracking-widest uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crew Section */}
      <section id="crew" className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block mb-3 text-[#F97316] font-semibold text-sm tracking-widest uppercase">
              The People
            </span>
            <h2
              className="text-5xl sm:text-6xl font-bold text-[#1E293B] mb-4"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              Meet the Crew
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              Every great story has unforgettable characters. Here are ours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map((friend) => (
              <article
                key={friend.name}
                className={`rounded-3xl ${friend.color} border-2 ${friend.border} p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-200`}
              >
                <div className={`w-28 h-28 rounded-full border-4 ${friend.border} overflow-hidden bg-white shadow-md flex-shrink-0`}>
                  {/* Placeholder avatar — replace src with real photo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={friend.placeholder}
                    alt={`${friend.name} placeholder avatar`}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3
                    className="text-3xl font-bold text-[#1E293B] leading-tight"
                    style={{ fontFamily: "var(--font-caveat)" }}
                  >
                    {friend.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    {friend.role}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {friend.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 sm:py-28 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block mb-3 text-[#F97316] font-semibold text-sm tracking-widest uppercase">
              Moments
            </span>
            <h2
              className="text-5xl sm:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              Our Gallery
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Every photo tells a story. These are the ones we never want to forget.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            {/* Large feature tile */}
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-end p-6 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="0.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18M12 12a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">Summer 2024</p>
                <p className="text-white font-bold" style={{ fontFamily: "var(--font-caveat)", fontSize: "1.5rem" }}>Beach Weekend</p>
              </div>
            </div>

            {galleryTiles.map((tile) => (
              <div
                key={tile.label}
                className={`rounded-3xl bg-gradient-to-br ${tile.from} ${tile.to} flex items-end p-4 relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="0.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18M12 12a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">{tile.sub}</p>
                  <p className="text-white font-bold" style={{ fontFamily: "var(--font-caveat)", fontSize: "1.15rem" }}>{tile.label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Photos coming soon — drop yours in the group chat!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8FAFC] border-t border-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-5xl sm:text-6xl font-bold text-[#1E293B] mb-4"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            More coming soon!
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-lg mx-auto">
            This site is just getting started. Events, blogs, shared playlists — it&apos;s all on the way.
          </p>
          <div className="flex justify-center gap-4 text-slate-400 text-sm flex-wrap">
            <span>Made with love by the crew</span>
            <span aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
