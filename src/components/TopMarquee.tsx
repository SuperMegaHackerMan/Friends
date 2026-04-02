import { MARQUEE } from '@/lib/data';

export default function TopMarquee() {
  return (
    <div className="bg-black border-b-[3px] border-[#00ffff] overflow-hidden py-1.5">
      <div className="inline-block whitespace-nowrap animate-marquee text-[#00ffff] text-sm font-bold">
        {MARQUEE}
      </div>
    </div>
  );
}
