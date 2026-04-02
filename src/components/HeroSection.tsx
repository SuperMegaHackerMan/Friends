import { COUNTER_DIGITS } from '@/lib/data';

const FLOATING_STARS = [
  { top: '8%',  left: '4%',  size: '28px', delay: '0s',   dur: '2.1s' },
  { top: '12%', left: '88%', size: '22px', delay: '0.4s', dur: '1.7s' },
  { top: '40%', left: '2%',  size: '18px', delay: '0.8s', dur: '2.5s' },
  { top: '55%', left: '94%', size: '24px', delay: '0.2s', dur: '1.9s' },
  { top: '75%', left: '6%',  size: '20px', delay: '1.1s', dur: '2.3s' },
  { top: '20%', left: '50%', size: '16px', delay: '0.6s', dur: '1.5s' },
  { top: '65%', left: '80%', size: '26px', delay: '0.9s', dur: '2.8s' },
  { top: '85%', left: '45%', size: '18px', delay: '0.3s', dur: '2.0s' },
];

export default function HeroSection() {
  return (
    <section className="starfield-bg relative px-4 py-12 text-center border-b-4 border-[#ff00ff]">

      {/* Floating ambient stars — positions/delays are per-star so kept as inline styles */}
      {FLOATING_STARS.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            fontSize: s.size,
            animation: `star-twinkle-anim ${s.dur} ${s.delay} ease-in-out infinite`,
          }}
        >✦</span>
      ))}

      {/* Spinning decorations */}
      <div className="text-5xl mb-2">
        <span className="inline-block animate-spin-cw mr-4">✦</span>
        <span className="inline-block animate-spin-ccw">★</span>
        <span className="inline-block animate-spin-cw ml-4">✦</span>
      </div>

      {/* Main title */}
      <h1
        className="animate-neon-pulse font-black tracking-[4px] mb-2"
        style={{ fontSize: 'clamp(52px, 12vw, 100px)', fontFamily: 'Impact, fantasy' }}
      >
        ~~~ OUR CREW ~~~
      </h1>

      {/* Subtitle */}
      <p className="text-[22px] font-bold animate-rainbow-text mb-3">
        ~*~ Best Friends 4EVER ~*~ Est. Since Always ~*~
      </p>

      {/* Badges */}
      <div className="flex gap-3 justify-center flex-wrap mb-5">
        <span className="bg-[#ff0000] text-[#ffff00] font-bold text-[13px] px-2.5 py-1 border-2 border-[#ffff00] animate-blink">
          !! NEW !!
        </span>
        <span className="inline-block bg-black text-[#00ff00] font-bold text-[13px] px-2.5 py-1 border-2 border-[#00ff00] animate-pulse-scale-fast">
          🔥 HOT PAGE 🔥
        </span>
        <span className="text-[13px] text-[#aaa] self-center">Last Updated: April 2001</span>
      </div>

      {/* Description box */}
      <div className="bg-[rgba(0,0,50,0.8)] border-[3px] border-dashed border-[#00ffff] max-w-[600px] mx-auto mb-7 px-5 py-4">
        <span className="block text-4xl animate-spin-cw-slow mb-2" aria-hidden="true">🌍</span>
        <p className="text-[#ccffff] text-base leading-[1.7] m-0">
          Welcome 2 our official website!! We r a group of{' '}
          <strong className="text-[#ffff00]">crazy best friends</strong> who love havin fun
          adventures n making memories!! This is our little corner of the internet where we post
          pics n stuff!! <span className="animate-blink-cursor">|</span>
        </p>
      </div>

      {/* Visitor counter */}
      <div>
        <p className="text-[#888] text-xs mb-1.5" style={{ fontFamily: "'Courier New', monospace" }}>
          YOU ARE VISITOR NUMBER:
        </p>
        <div className="inline-flex gap-[3px]">
          {COUNTER_DIGITS.map((d, i) => (
            <span key={i} className="lcd-digit">{d}</span>
          ))}
        </div>
        <p className="text-[#555] text-[11px] mt-1.5" style={{ fontFamily: "'Courier New', monospace" }}>
          Counter resets daily!! (we peaked at 420)
        </p>
      </div>
    </section>
  );
}
