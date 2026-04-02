'use client';

import dynamic from 'next/dynamic';

const Clippy = dynamic(() => import('./Clippy'), { ssr: false });

export default function ClippyLoader() {
  return <Clippy />;
}
