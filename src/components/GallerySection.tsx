import { galleryItems } from '@/lib/data';

export default function GallerySection() {
  return (
    <section className="bg-[#0a0010] px-4 py-10">

      <h2
        className="neon-pink text-center tracking-[3px] mb-2"
        style={{ fontFamily: 'Impact, fantasy', fontSize: 'clamp(32px, 7vw, 58px)' }}
      >
        ★ PHOTO ALBUM ★
      </h2>
      <p className="text-center text-[#888] text-[13px] mb-2">
        ~*~ our best memories 4ever ~*~
      </p>
      <p className="text-center text-[14px] text-[#ff00ff] mb-7 animate-blink-med">
        !! REAL PHOTOS COMING SOON — UPLOADING ON 56K MODEM !!
      </p>

      <div
        className="grid gap-6 max-w-[900px] mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
      >
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="bg-white p-2.5 pb-10 transition-transform duration-200"
            style={{
              transform: `rotate(${item.rot})`,
              boxShadow: '4px 4px 16px rgba(0,0,0,0.8), 0 0 20px #ff00ff44',
            }}
          >
            {/* Placeholder */}
            <div
              className="h-[150px] flex flex-col items-center justify-center text-5xl border-2 border-white/20"
              style={{ background: item.bg }}
              aria-label={`${item.caption} photo placeholder`}
            >
              {item.emoji}
              <span
                className="text-[11px] text-white/50 mt-1.5"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                [ photo here ]
              </span>
            </div>
            {/* Caption */}
            <p className="text-[#111] text-[11px] text-center mt-2 leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
