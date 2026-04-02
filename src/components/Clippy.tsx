'use client';

import { useState, useEffect } from 'react';

const messages = [
  "It looks like you're visiting a website! Would you like help with that? 📎",
  "Did you know this site runs BEST on Internet Explorer 5.5?",
  "I notice you haven't signed the guestbook yet...",
  "WARNING: This page may cause extreme nostalgia. Proceed? [Yes] [No]",
  "Your FREE iPod Nano is waiting!! Click here to claim!!",
  "I have detected 47 viruses. Download our FREE toolbar to remove them!",
  "Would you like me to install the Bonzi Buddy toolbar?",
  "MIDI music would be playing rn if u had the plugin installed :(",
  "You are visitor #69,420. Congratulations!! You've won nothing.",
  "This page is 100% Y2K compliant. We checked. Twice.",
  "AOL Instant Messenger: OurCrew4Life — Add me!!",
  "Don't forget to set us as your homepage!! We worked really hard!!",
];

export default function Clippy() {
  const [visible, setVisible] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);
  const [eyePos, setEyePos] = useState({ lx: 25, ly: 37, rx: 37, ry: 37 });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(false);
      setTimeout(() => {
        setMsgIndex(i => (i + 1) % messages.length);
        setShowBubble(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Googly eyes follow mouse
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const el = document.getElementById('clippy-body');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const r = 2;
      setEyePos({
        lx: 24 + r * Math.cos(angle),
        ly: 36 + r * Math.sin(angle),
        rx: 36 + r * Math.cos(angle),
        ry: 36 + r * Math.sin(angle),
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-1 select-none"
      style={{ fontFamily: "'Comic Sans MS', cursive" }}
    >
      {/* Speech bubble */}
      {showBubble && (
        <div
          className="relative bg-white text-gray-900 border-2 border-gray-800 rounded-xl p-3 max-w-[210px] text-xs leading-snug shadow-2xl"
          style={{ animation: 'slide-in-left-anim 0.35s ease-out' }}
        >
          <p>{messages[msgIndex]}</p>
          {/* Bubble tail */}
          <span
            className="absolute -bottom-[13px] right-7"
            style={{
              width: 0, height: 0,
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              borderTop: '13px solid #1f2937',
              display: 'block',
            }}
          />
          <span
            className="absolute -bottom-[10px] right-[29px]"
            style={{
              width: 0, height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '11px solid white',
              display: 'block',
            }}
          />
        </div>
      )}

      {/* Clippy body */}
      <div
        id="clippy-body"
        className="cursor-pointer"
        style={{ animation: 'clippy-idle-anim 4s ease-in-out infinite' }}
        onClick={() => {
          setMsgIndex(i => (i + 1) % messages.length);
          setShowBubble(true);
        }}
        title="Click me!"
        role="button"
        aria-label="Clippy assistant"
      >
        <svg width="64" height="96" viewBox="0 0 60 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer paperclip loop */}
          <path
            d="M30 5 C50 5 57 18 57 32 C57 60 44 72 30 72 C16 72 3 60 3 32 C3 18 10 5 30 5Z"
            stroke="#aaaaaa" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Inner loop */}
          <path
            d="M30 19 C43 19 47 28 47 36 C47 52 40 62 30 62 C20 62 13 52 13 36 C13 28 17 19 30 19Z"
            stroke="#999999" strokeWidth="5.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Bottom tail */}
          <line x1="30" y1="72" x2="30" y2="91" stroke="#aaaaaa" strokeWidth="7" strokeLinecap="round"/>

          {/* Face bg */}
          <ellipse cx="30" cy="38" rx="14" ry="12" fill="#fffef0"/>

          {/* Eye whites */}
          <circle cx="24" cy="36" r="5.5" fill="white" stroke="#ccc" strokeWidth="0.5"/>
          <circle cx="36" cy="36" r="5.5" fill="white" stroke="#ccc" strokeWidth="0.5"/>

          {/* Pupils (googly) */}
          <circle cx={eyePos.lx} cy={eyePos.ly} r="3" fill="#111"/>
          <circle cx={eyePos.rx} cy={eyePos.ry} r="3" fill="#111"/>

          {/* Eye shine */}
          <circle cx={eyePos.lx + 1} cy={eyePos.ly - 1} r="1" fill="white"/>
          <circle cx={eyePos.rx + 1} cy={eyePos.ry - 1} r="1" fill="white"/>

          {/* Eyebrows */}
          <path d="M20 30 Q24 28 28 30" stroke="#555" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M32 30 Q36 28 40 30" stroke="#555" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

          {/* Smile */}
          <path d="M25 43 Q30 48 35 43" stroke="#555" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="text-[10px] text-gray-400 hover:text-red-400 bg-gray-900 border border-gray-600 px-2 py-0.5 rounded cursor-pointer transition-colors"
      >
        [x] Close
      </button>
    </div>
  );
}
