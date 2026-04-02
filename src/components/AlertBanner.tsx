export default function AlertBanner() {
  return (
    <div className="bg-[#111100] border-y-[3px] border-[#ffff00] py-2.5 px-5 text-center text-[13px] text-[#ffff00]">
      <span className="inline-block animate-shake mr-2">⚠️</span>
      <strong>BEST VIEWED IN:</strong> Internet Explorer 5.5 | Netscape Navigator 4.7 | Screen: 800×600 | Colors: 16-bit |
      <span className="animate-blink-med"> Sound: ON for MIDI music!!</span>
      <span className="inline-block animate-shake ml-2">⚠️</span>
    </div>
  );
}
