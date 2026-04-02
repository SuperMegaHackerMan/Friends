import { badges } from '@/lib/data';

export default function SiteFooter() {
  return (
    <>
      <div className="construction-bar py-1.5" aria-label="Under construction banner" />

      <footer className="bg-black px-4 pt-8 pb-5 text-center border-t-4 border-double border-[#ff00ff]">

        {/* Retro badges */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-5">
          {badges.map((b) => (
            <span
              key={b.text}
              className="retro-badge"
              style={{ background: b.bg, color: b.color, borderColor: b.color }}
            >
              {b.text}
            </span>
          ))}
        </div>

        {/* Spinning award */}
        <div
          className="inline-flex flex-col items-center justify-center rounded-full w-[90px] h-[90px] p-2 mb-4 font-bold text-[10px] text-center text-[#ffcc00] animate-spin-cw-xslow"
          style={{
            background: 'radial-gradient(circle, #441100, #220800)',
            border: '4px solid #ff8800',
            boxShadow: '0 0 20px #ff880066',
          }}
          aria-label="Best website award"
        >
          <span className="text-xl block">🏆</span>
          BEST SITE<br />OF 1999
        </div>

        {/* Coming soon */}
        <p
          className="text-[13px] text-[#666] mb-2"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          ~~~ MORE FEATURES COMING SOON!! ~~~<br />
          Events Page • Our Blog • Shared Playlist • Poll of the Week • Hit Counter API
        </p>

        <p
          className="text-[12px] text-[#444] mb-3"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Best viewed in 800×600 resolution • 16-bit color • Enable JavaScript • Allow popups
        </p>

        <p
          className="text-[11px] text-[#333]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          © {new Date().getFullYear()} OurCrew.geocities.com — All Rights Reserved<br />
          This page has been visited{' '}
          <span className="text-[#00ff00]">69,420</span> times since 1999
          <span className="text-[#00ff00] animate-cursor-blink">█</span>
        </p>

        {/* WebRing */}
        <div
          className="mt-4 text-[11px] text-[#333]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          [ ← Prev ] —{' '}
          <span className="text-[#555]">GeoCities Personal Pages WebRing</span>
          {' '}— [ Next → ]<br />
          <span className="text-[#222]">[ List Sites ] [ Join Ring ] [ Random Site ]</span>
        </div>

      </footer>
    </>
  );
}
