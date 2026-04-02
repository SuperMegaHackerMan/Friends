export type BorderStyle = 'dashed' | 'double' | 'ridge' | 'groove' | 'outset' | 'inset';

export type Friend = {
  name: string;
  role: string;
  desc: string;
  bg: string;
  border: string;
  borderStyle: BorderStyle;
  nameFont: string;
  color: string;
  icon: string;
  spin: string;
  spinClass: string;
};

export type GalleryItem = {
  caption: string;
  bg: string;
  rot: string;
  emoji: string;
};

export type GuestbookEntry = {
  user: string;
  aim: string;
  date: string;
  msg: string;
  color: string;
};

export type Badge = {
  text: string;
  bg: string;
  color: string;
};

export const MARQUEE =
  '★ WELCOME TO OUR CREW WEBSITE!! ★ You are visitor #69,420!! ★ Sign our GUESTBOOK!! ★ ' +
  'BEST VIEWED IN INTERNET EXPLORER 5.5 ★ Resolution: 800×600 ★ MIDI music loading... ★ ' +
  'DO NOT STEAL MY HTML!! ★ Page hosted on GeoCities ★ THIS SITE IS HOT!! ★ Y2K COMPLIANT!! ★ ' +
  '★ WELCOME TO OUR CREW WEBSITE!! ★ You are visitor #69,420!! ★ Sign our GUESTBOOK!! ★ ' +
  'BEST VIEWED IN INTERNET EXPLORER 5.5 ★ Resolution: 800×600 ★ MIDI music loading... ★ ' +
  'DO NOT STEAL MY HTML!! ★ Page hosted on GeoCities ★ THIS SITE IS HOT!! ★ Y2K COMPLIANT!! ★ ';

export const BOTTOM_MARQUEE =
  '♥ thanks 4 visiting!! add us to ur favorites!! tell ur friends!! email us!! bookmark this!! ♥ ' +
  'dont forget 2 sign the guestbook!! we check it every day!! ♥ more photos uploading on our 56k modem!! ♥ ' +
  '♥ thanks 4 visiting!! add us to ur favorites!! tell ur friends!! email us!! bookmark this!! ♥ ' +
  'dont forget 2 sign the guestbook!! we check it every day!! ♥ more photos uploading on our 56k modem!! ♥ ';

export const COUNTER_DIGITS = ['0', '0', '0', '6', '9', '4', '2', '0'];

export const FUN_FACTS: [string, string][] = [
  ['Total friends', '6 (and counting??)'],
  ['Years of friendship', 'Like 5?? We lost count'],
  ['Road trips taken', '12 (and survived all of them)'],
  ['Shared playlists', '47 (ask riley 4 the aux)'],
  ['Inside jokes', 'Literally uncountable'],
  ['Group chat name', '"THE CREW 🔥" (we r very creative)'],
];

export const friends: Friend[] = [
  {
    name: 'Alex',
    role: 'The Photographer',
    desc: 'Always has a camera, never misses a moment. Took 847 photos at the last party.',
    bg: '#000d1a',
    border: '#00ffff',
    borderStyle: 'dashed',
    nameFont: 'Impact, fantasy',
    color: '#00ffff',
    icon: '📷',
    spin: '★',
    spinClass: 'animate-star-twinkle',
  },
  {
    name: 'Jordan',
    role: 'The Chef',
    desc: 'Turns every hangout into a food adventure. Has a secret pasta recipe we all beg for.',
    bg: '#140020',
    border: '#ff00ff',
    borderStyle: 'double',
    nameFont: "'Times New Roman', serif",
    color: '#ff00ff',
    icon: '🍝',
    spin: '♦',
    spinClass: 'animate-bounce-ud',
  },
  {
    name: 'Sam',
    role: 'The Planner',
    desc: 'Has a spreadsheet for every trip. Printed MapQuest directions before GPS existed.',
    bg: '#001a00',
    border: '#00ff00',
    borderStyle: 'ridge',
    nameFont: 'Georgia, serif',
    color: '#00ff00',
    icon: '🗺️',
    spin: '◆',
    spinClass: 'animate-wobble',
  },
  {
    name: 'Morgan',
    role: 'The Storyteller',
    desc: 'Remembers every single detail of every story. Will correct you if you get it wrong.',
    bg: '#1a0a00',
    border: '#ff8800',
    borderStyle: 'groove',
    nameFont: "'Courier New', monospace",
    color: '#ff8800',
    icon: '📖',
    spin: '✦',
    spinClass: 'animate-float-drift',
  },
  {
    name: 'Casey',
    role: 'The Wild Card',
    desc: 'Suggests the most random ideas that somehow always turn out incredible. Legend.',
    bg: '#1a001a',
    border: '#ff44ff',
    borderStyle: 'outset',
    nameFont: 'Impact, fantasy',
    color: '#ff44ff',
    icon: '🎲',
    spin: '☆',
    spinClass: 'animate-shake',
  },
  {
    name: 'Riley',
    role: 'The DJ',
    desc: 'Has a playlist for literally every mood. Responsible for ALL the aux cord decisions.',
    bg: '#0a0a00',
    border: '#ffff00',
    borderStyle: 'inset',
    nameFont: 'Arial Black, sans-serif',
    color: '#ffff00',
    icon: '🎵',
    spin: '♪',
    spinClass: 'animate-spin-cw-fast',
  },
];

export const galleryItems: GalleryItem[] = [
  { caption: 'Beach Weekend!!! Summer 2001!!!', bg: 'linear-gradient(135deg,#003366,#006699)', rot: '-3deg', emoji: '🏖️' },
  { caption: 'NYE PARTY omg insane night', bg: 'linear-gradient(135deg,#330066,#660099)', rot: '2deg', emoji: '🎆' },
  { caption: 'Hiking Trip May 2001', bg: 'linear-gradient(135deg,#003300,#006600)', rot: '-1.5deg', emoji: '🏕️' },
  { caption: 'Concert!! front row!!', bg: 'linear-gradient(135deg,#660000,#990000)', rot: '3deg', emoji: '🎸' },
  { caption: 'Camping Out July!!', bg: 'linear-gradient(135deg,#664400,#997700)', rot: '-2deg', emoji: '🌌' },
  { caption: 'Road trip 2001 lfg!!', bg: 'linear-gradient(135deg,#004444,#007777)', rot: '1.5deg', emoji: '🚗' },
];

export const guestbook: GuestbookEntry[] = [
  {
    user: 'xXxDragonSlayer99xXx',
    aim: 'DragonSlay99',
    date: '04/13/2001 @ 2:34 PM',
    msg: 'NICE SITE!!!! added 2 my FAVORITES!! luv ur page check out MY page 2!! www.geocities.com/dragonslay99 ~*~',
    color: '#00ffff',
  },
  {
    user: '♥GirlsRuleBoyzDrool♥',
    aim: 'GrlzRule2001',
    date: '07/22/2001 @ 8:12 PM',
    msg: 'omg i luv ur frends page!! ur all so cute lolz ~*~ ur friend alex took my pic once n i look SO bad lmao!!',
    color: '#ff00ff',
  },
  {
    user: 'CoolDude_2000',
    aim: 'CoolDude2k',
    date: '09/04/2001 @ 11:59 PM',
    msg: 'ur page loaded kinda slow but its worth it!! great job webmaster!! do u use frontpage?? ;) ;) ;)',
    color: '#00ff00',
  },
  {
    user: 'webmaster_pro_99',
    aim: 'WebPro99',
    date: '12/31/2001 @ 11:58 PM',
    msg: 'happy new year!!!! 2002 is gonna be SO good!! ur site is one of the best on geocities no joke!!',
    color: '#ffff00',
  },
];

export const badges: Badge[] = [
  { text: 'NETSCAPE NOW!', bg: '#007700', color: '#fff' },
  { text: 'Y2K READY!', bg: '#770000', color: '#ffff00' },
  { text: 'MADE W/ NOTEPAD', bg: '#000077', color: '#00ffff' },
  { text: 'IE 5.5 OPTIMIZED', bg: '#440044', color: '#ff00ff' },
  { text: 'NO FRAMES!', bg: '#444400', color: '#ffff00' },
  { text: 'GEOCITIES HOSTED', bg: '#004444', color: '#00ffff' },
  { text: 'BEST SITE 1999', bg: '#770044', color: '#fff' },
  { text: 'WEB RING MEMBER', bg: '#224400', color: '#88ff00' },
];
