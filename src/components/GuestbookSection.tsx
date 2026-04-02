import { guestbook } from '@/lib/data';

export default function GuestbookSection() {
  return (
    <section className="bg-[#000d00] px-4 py-10 border-b-4 border-[#00ff00]">
      <div className="max-w-[760px] mx-auto">

        <h2
          className="neon-green text-center tracking-[2px] mb-2"
          style={{ fontFamily: 'Impact, fantasy', fontSize: 'clamp(30px, 6vw, 52px)' }}
        >
          ✉ GUESTBOOK ✉
        </h2>

        <div className="text-center mb-6">
          <span className="inline-block bg-[#003300] border-2 border-[#00ff00] text-[#00ff00] px-5 py-2 font-bold text-[14px] cursor-pointer animate-pulse-scale">
            ✏️ SIGN MY GUESTBOOK!!
          </span>
          <p className="text-[#555] text-xs mt-1.5">
            (functionality coming soon when we learn more HTML)
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {guestbook.map((entry, i) => (
            <div
              key={i}
              className="bg-[#001100] p-4"
              style={{ border: `2px solid ${entry.color}`, boxShadow: `0 0 8px ${entry.color}44` }}
            >
              <div className="flex justify-between flex-wrap mb-1.5">
                <span className="font-bold text-[15px]" style={{ color: entry.color }}>
                  {entry.user}
                </span>
                <span
                  className="text-[#555] text-[11px] self-center"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  AIM: {entry.aim} | {entry.date}
                </span>
              </div>
              <p className="text-[#ddd] text-[14px] leading-relaxed">{entry.msg}</p>
            </div>
          ))}
        </div>

        <p
          className="mt-5 text-center text-[#555] text-[13px]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Showing entries 1–4 of 4 total | This guestbook powered by GuestWorld™ 1998
        </p>
      </div>
    </section>
  );
}
