export default function ConstructionBanner() {
  return (
    <>
      <div className="construction-bar py-1.5" aria-label="Under construction banner" />
      <div className="bg-[#111] text-center py-2.5 px-4 text-lg font-bold text-[#f7c948] tracking-[2px]">
        <span className="inline-block animate-bounce-ud mr-2">🚧</span>
        THIS SITE IS UNDER CONSTRUCTION!! COME BACK EVERY DAY 4 UPDATES!!
        <span className="inline-block animate-bounce-ud-delayed ml-2">🚧</span>
      </div>
      <div className="construction-bar py-1.5" aria-label="Under construction banner" />
    </>
  );
}
