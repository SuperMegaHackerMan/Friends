import { friends } from '@/lib/data';

export default function CrewSection() {
  return (
    <section className="bg-[#050505] px-4 py-10">

      <h2
        className="neon-cyan text-center tracking-[4px] mb-2.5"
        style={{ fontFamily: 'Impact, fantasy', fontSize: 'clamp(36px, 8vw, 64px)' }}
      >
        ~*~ MEET THE CREW ~*~
      </h2>
      <p className="text-center text-[#888] text-[14px] mb-8 italic">
        these r my best frends in the whole world!! dont mess with them!!
      </p>

      <div className="grid gap-5 max-w-[900px] mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
      >
        {friends.map((f) => (
          <div
            key={f.name}
            className="relative p-5 text-center animate-rainbow-border-slow"
            style={{ background: f.bg, border: `4px ${f.borderStyle} ${f.border}` }}
          >
            {/* Spinning icon */}
            <span
              aria-hidden="true"
              className={`absolute top-2 right-2.5 text-lg inline-block ${f.spinClass}`}
              style={{ color: f.color }}
            >
              {f.spin}
            </span>

            {/* Avatar */}
            <div
              className="w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto mb-3 text-[28px]"
              style={{
                background: `radial-gradient(circle, ${f.color}33, ${f.border}22)`,
                border: `3px solid ${f.border}`,
                boxShadow: `0 0 16px ${f.border}66`,
              }}
              aria-label={`${f.name} avatar placeholder`}
            >
              {f.icon}
            </div>

            {/* Name */}
            <div
              className="text-[26px] font-bold mb-1"
              style={{
                fontFamily: f.nameFont,
                color: f.color,
                textShadow: `0 0 8px ${f.color}, 0 0 16px ${f.color}`,
              }}
            >
              {f.name}
            </div>

            {/* Role */}
            <div
              className="italic text-[#aaa] text-[13px] mb-2.5 animate-blink-slow"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              ~~ {f.role} ~~
            </div>

            {/* Description */}
            <p className="text-[13px] text-[#ccc] leading-relaxed">{f.desc}</p>

            {/* AIM status */}
            <div
              className="mt-2.5 text-[11px] text-[#ffff00]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              <span className="text-[#00ff00]">●</span> Online — AIM: {f.name.toLowerCase()}2001
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
