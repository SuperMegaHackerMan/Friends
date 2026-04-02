export default function MidiNotice() {
  return (
    <div className="bg-[#110011] border-y-2 border-dashed border-[#ff00ff] py-3 px-5 text-center text-[13px] text-[#ff88ff]">
      <span className="inline-block animate-bounce-ud-slow mr-2">🎵</span>
      <strong>MUSIC:</strong> &quot;All Star&quot; by Smash Mouth is currently loading in the background...
      <em className="text-[#888] ml-2">(requires RealPlayer plugin v5.0 or higher)</em>
      <span className="inline-block animate-bounce-ud-slow-delayed ml-2">🎶</span>
    </div>
  );
}
