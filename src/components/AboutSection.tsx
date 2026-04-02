import { FUN_FACTS } from '@/lib/data';

export default function AboutSection() {
  return (
    <section className="bg-[#000022] px-4 py-10 border-b-4 border-double border-[#00ffff]">
      <div className="max-w-[800px] mx-auto">

        <h2
          className="text-center animate-rainbow-text mb-6 tracking-[3px]"
          style={{ fontFamily: 'Impact, fantasy', fontSize: 'clamp(36px, 8vw, 64px)' }}
        >
          ~~ ABOUT US ~~
        </h2>

        {/* Description box with animated rainbow border */}
        <div className="border-4 border-[#ff00ff] bg-[rgba(255,0,255,0.05)] p-5 mb-5 animate-rainbow-border">
          <p className="text-base leading-[1.9] text-[#eee]">
            <span className="inline-block animate-star-twinkle">✨</span>{' '}
            We have been best friends since like FOREVER!! We do everything together —
            road trips, concerts, random 2am drives, camping trips, and way too many pizza nights.
            This website is our digital home where we keep all our memories, photos n stuff!!{' '}
            <span className="inline-block animate-star-twinkle">✨</span>
          </p>
          <p className="text-base leading-[1.9] text-[#eee] mt-3">
            We started this site because we wanted a place that was{' '}
            <span className="text-[#ffff00] font-bold animate-blink-slow">100% OURS</span>{' '}
            and not owned by some corporation lol!! Bookmark this page and check back 4 updates!!
            We post new stuff like every week!! (when we remember)
          </p>
        </div>

        {/* Fun facts table */}
        <table
          className="w-full border-collapse text-[14px] text-[#ccc] border-[3px] border-[#00ff00]"
          aria-label="Fun facts about our crew"
        >
          <thead>
            <tr className="bg-[#003300]">
              <th className="p-2 border border-[#00ff00] text-[#00ff00] text-left">FACT</th>
              <th className="p-2 border border-[#00ff00] text-[#00ff00] text-left">INFO</th>
            </tr>
          </thead>
          <tbody>
            {FUN_FACTS.map(([fact, info], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-[#001100]' : 'bg-[#001a00]'}>
                <td className="p-2 border border-[#005500] text-[#88ff88]">{fact}</td>
                <td className="p-2 border border-[#005500]">{info}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  );
}
