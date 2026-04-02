import { BOTTOM_MARQUEE } from '@/lib/data';

export default function BottomMarquee() {
  return (
    <div className="bg-black border-t-[3px] border-[#ff00ff] overflow-hidden py-1.5">
      <div className="inline-block whitespace-nowrap animate-marquee-slow text-[#ff00ff] text-[13px] font-bold">
        {BOTTOM_MARQUEE}
      </div>
    </div>
  );
}
