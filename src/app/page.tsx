import ClippyLoader from '@/components/ClippyLoader';

/* =============================================
   ~~~ OUR CREW DOT COM ~~~
   Last Updated: April 2001
   Do NOT steal my HTML!! I will find out!!
   Webmaster: OurCrew4Life@aol.com
   ============================================= */

const MARQUEE =
  '★ WELCOME TO OUR CREW WEBSITE!! ★ You are visitor #69,420!! ★ Sign our GUESTBOOK!! ★ ' +
  'BEST VIEWED IN INTERNET EXPLORER 5.5 ★ Resolution: 800×600 ★ MIDI music loading... ★ ' +
  'DO NOT STEAL MY HTML!! ★ Page hosted on GeoCities ★ THIS SITE IS HOT!! ★ Y2K COMPLIANT!! ★ ' +
  '★ WELCOME TO OUR CREW WEBSITE!! ★ You are visitor #69,420!! ★ Sign our GUESTBOOK!! ★ ' +
  'BEST VIEWED IN INTERNET EXPLORER 5.5 ★ Resolution: 800×600 ★ MIDI music loading... ★ ' +
  'DO NOT STEAL MY HTML!! ★ Page hosted on GeoCities ★ THIS SITE IS HOT!! ★ Y2K COMPLIANT!! ★ ';

const COUNTER_DIGITS = ['0','0','0','6','9','4','2','0'];

const friends = [
  {
    name: 'Alex',
    role: 'The Photographer',
    desc: 'Always has a camera, never misses a moment. Took 847 photos at the last party.',
    avatar: 'A',
    bg: '#000d1a',
    border: '#00ffff',
    borderStyle: 'dashed' as const,
    nameFont: 'Impact, fantasy',
    color: '#00ffff',
    icon: '📷',
    spin: '★',
    anim: 'star-twinkle-anim 1.2s ease-in-out infinite',
  },
  {
    name: 'Jordan',
    role: 'The Chef',
    desc: 'Turns every hangout into a food adventure. Has a secret pasta recipe we all beg for.',
    avatar: 'J',
    bg: '#140020',
    border: '#ff00ff',
    borderStyle: 'double' as const,
    nameFont: "'Times New Roman', serif",
    color: '#ff00ff',
    icon: '🍝',
    spin: '♦',
    anim: 'bounce-ud 1s ease-in-out infinite',
  },
  {
    name: 'Sam',
    role: 'The Planner',
    desc: 'Has a spreadsheet for every trip. Printed MapQuest directions before GPS existed.',
    avatar: 'S',
    bg: '#001a00',
    border: '#00ff00',
    borderStyle: 'ridge' as const,
    nameFont: 'Georgia, serif',
    color: '#00ff00',
    icon: '🗺️',
    spin: '◆',
    anim: 'wobble-anim 2s ease-in-out infinite',
  },
  {
    name: 'Morgan',
    role: 'The Storyteller',
    desc: 'Remembers every single detail of every story. Will correct you if you get it wrong.',
    avatar: 'M',
    bg: '#1a0a00',
    border: '#ff8800',
    borderStyle: 'groove' as const,
    nameFont: "'Courier New', monospace",
    color: '#ff8800',
    icon: '📖',
    spin: '✦',
    anim: 'float-drift-anim 3s ease-in-out infinite',
  },
  {
    name: 'Casey',
    role: 'The Wild Card',
    desc: 'Suggests the most random ideas that somehow always turn out incredible. Legend.',
    avatar: 'C',
    bg: '#1a001a',
    border: '#ff44ff',
    borderStyle: 'outset' as const,
    nameFont: 'Impact, fantasy',
    color: '#ff44ff',
    icon: '🎲',
    spin: '☆',
    anim: 'shake-anim 2.5s ease-in-out infinite',
  },
  {
    name: 'Riley',
    role: 'The DJ',
    desc: 'Has a playlist for literally every mood. Responsible for ALL the aux cord decisions.',
    avatar: 'R',
    bg: '#0a0a00',
    border: '#ffff00',
    borderStyle: 'inset' as const,
    nameFont: 'Arial Black, sans-serif',
    color: '#ffff00',
    icon: '🎵',
    spin: '♪',
    anim: 'spin-cw 2s linear infinite',
  },
];

const galleryItems = [
  { caption: 'Beach Weekend!!! Summer 2001!!!', bg: 'linear-gradient(135deg,#003366,#006699)', rot: '-3deg', emoji: '🏖️' },
  { caption: 'NYE PARTY omg insane night', bg: 'linear-gradient(135deg,#330066,#660099)', rot: '2deg', emoji: '🎆' },
  { caption: 'Hiking Trip May 2001', bg: 'linear-gradient(135deg,#003300,#006600)', rot: '-1.5deg', emoji: '🏕️' },
  { caption: 'Concert!! front row!!', bg: 'linear-gradient(135deg,#660000,#990000)', rot: '3deg', emoji: '🎸' },
  { caption: 'Camping Out July!!', bg: 'linear-gradient(135deg,#664400,#997700)', rot: '-2deg', emoji: '🌌' },
  { caption: 'Road trip 2001 lfg!!', bg: 'linear-gradient(135deg,#004444,#007777)', rot: '1.5deg', emoji: '🚗' },
];

const guestbook = [
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

const badges = [
  { text: 'NETSCAPE NOW!', bg: '#007700', color: '#fff' },
  { text: 'Y2K READY!', bg: '#770000', color: '#ffff00' },
  { text: 'MADE W/ NOTEPAD', bg: '#000077', color: '#00ffff' },
  { text: 'IE 5.5 OPTIMIZED', bg: '#440044', color: '#ff00ff' },
  { text: 'NO FRAMES!', bg: '#444400', color: '#ffff00' },
  { text: 'GEOCITIES HOSTED', bg: '#004444', color: '#00ffff' },
  { text: 'BEST SITE 1999', bg: '#770044', color: '#fff' },
  { text: 'WEB RING MEMBER', bg: '#224400', color: '#88ff00' },
];

export default function Home() {
  return (
    <main
      style={{ fontFamily: "'Comic Sans MS', 'Comic Neue', cursive", background: '#000011', color: '#ffffff', minHeight: '100dvh' }}
    >
      {/* ====== TOP MARQUEE ====== */}
      <div style={{ background: '#000000', borderBottom: '3px solid #00ffff', overflow: 'hidden', padding: '6px 0' }}>
        <div
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation: 'marquee-scroll 35s linear infinite',
            color: '#00ffff',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          {MARQUEE}
        </div>
      </div>

      {/* ====== HERO ====== */}
      <section
        className="starfield-bg"
        style={{ position: 'relative', padding: '48px 16px 56px', textAlign: 'center', borderBottom: '4px solid #ff00ff' }}
      >
        {/* Floating stars around the page */}
        {[
          { top: '8%', left: '4%', size: '28px', delay: '0s', dur: '2.1s' },
          { top: '12%', left: '88%', size: '22px', delay: '0.4s', dur: '1.7s' },
          { top: '40%', left: '2%', size: '18px', delay: '0.8s', dur: '2.5s' },
          { top: '55%', left: '94%', size: '24px', delay: '0.2s', dur: '1.9s' },
          { top: '75%', left: '6%', size: '20px', delay: '1.1s', dur: '2.3s' },
          { top: '20%', left: '50%', size: '16px', delay: '0.6s', dur: '1.5s' },
          { top: '65%', left: '80%', size: '26px', delay: '0.9s', dur: '2.8s' },
          { top: '85%', left: '45%', size: '18px', delay: '0.3s', dur: '2.0s' },
        ].map((s, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: s.top, left: s.left,
              fontSize: s.size,
              animation: `star-twinkle-anim ${s.dur} ${s.delay} ease-in-out infinite`,
              pointerEvents: 'none',
            }}
          >✦</span>
        ))}

        {/* Spinning decorations */}
        <div style={{ fontSize: '48px', marginBottom: '8px' }}>
          <span style={{ display: 'inline-block', animation: 'spin-cw 3s linear infinite', marginRight: '16px' }}>✦</span>
          <span style={{ display: 'inline-block', animation: 'spin-ccw 2s linear infinite' }}>★</span>
          <span style={{ display: 'inline-block', animation: 'spin-cw 4s linear infinite', marginLeft: '16px' }}>✦</span>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: 'clamp(52px, 12vw, 100px)',
            fontFamily: 'Impact, fantasy',
            fontWeight: '900',
            letterSpacing: '4px',
            margin: '0 0 8px',
            animation: 'neon-pulse-anim 2s ease-in-out infinite',
          }}
        >
          ~~~ OUR CREW ~~~
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '22px',
            animation: 'rainbow-text-anim 1.5s linear infinite',
            fontWeight: 'bold',
            marginBottom: '12px',
          }}
        >
          ~*~ Best Friends 4EVER ~*~ Est. Since Always ~*~
        </p>

        {/* Under construction / new badge */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span
            style={{
              background: '#ff0000',
              color: '#ffff00',
              fontWeight: 'bold',
              fontSize: '13px',
              padding: '4px 10px',
              border: '2px solid #ffff00',
              animation: 'blink-anim 0.7s step-end infinite',
            }}
          >
            !! NEW !!
          </span>
          <span
            style={{
              background: '#000',
              color: '#00ff00',
              fontWeight: 'bold',
              fontSize: '13px',
              padding: '4px 10px',
              border: '2px solid #00ff00',
              animation: 'pulse-scale-anim 1.2s ease-in-out infinite',
              display: 'inline-block',
            }}
          >
            🔥 HOT PAGE 🔥
          </span>
          <span style={{ color: '#aaa', fontSize: '13px', alignSelf: 'center' }}>
            Last Updated: April 2001
          </span>
        </div>

        {/* Spinning globe + description */}
        <div
          style={{
            background: 'rgba(0,0,50,0.8)',
            border: '3px dashed #00ffff',
            maxWidth: '600px',
            margin: '0 auto 28px',
            padding: '16px 20px',
          }}
        >
          <span
            style={{ fontSize: '36px', display: 'block', animation: 'spin-cw 8s linear infinite', marginBottom: '8px' }}
            aria-hidden="true"
          >
            🌍
          </span>
          <p style={{ color: '#ccffff', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
            Welcome 2 our official website!! We r a group of <strong style={{ color: '#ffff00' }}>crazy best friends</strong> who
            love havin fun adventures n making memories!! This is our little corner of the internet where
            we post pics n stuff!! <span style={{ animation: 'blink-anim 0.6s step-end infinite', display: 'inline' }}>|</span>
          </p>
        </div>

        {/* Visitor counter */}
        <div>
          <p style={{ color: '#888', fontSize: '12px', marginBottom: '6px', fontFamily: "'Courier New', monospace" }}>
            YOU ARE VISITOR NUMBER:
          </p>
          <div style={{ display: 'inline-flex', gap: '3px' }}>
            {COUNTER_DIGITS.map((d, i) => (
              <span key={i} className="lcd-digit">{d}</span>
            ))}
          </div>
          <p style={{ color: '#555', fontSize: '11px', marginTop: '6px', fontFamily: "'Courier New', monospace" }}>
            Counter resets daily!! (we peaked at 420)
          </p>
        </div>
      </section>

      {/* ====== RAINBOW DIVIDER ====== */}
      <div className="rainbow-divider" />

      {/* ====== BEST VIEWED ALERT ====== */}
      <div
        style={{
          background: '#111100',
          border: '3px solid #ffff00',
          padding: '10px 20px',
          textAlign: 'center',
          fontSize: '13px',
          color: '#ffff00',
        }}
      >
        <span style={{ animation: 'shake-anim 2s ease-in-out infinite', display: 'inline-block', marginRight: '8px' }}>⚠️</span>
        <strong>BEST VIEWED IN:</strong> Internet Explorer 5.5 | Netscape Navigator 4.7 | Screen: 800×600 | Colors: 16-bit |
        <span style={{ animation: 'blink-anim 1s step-end infinite', display: 'inline' }}> Sound: ON for MIDI music!!</span>
        <span style={{ animation: 'shake-anim 2s ease-in-out infinite', display: 'inline-block', marginLeft: '8px' }}>⚠️</span>
      </div>

      {/* ====== CONSTRUCTION BANNER ====== */}
      <div style={{ padding: '6px 0' }} className="construction-bar" aria-label="Under construction banner" />
      <div
        style={{
          background: '#111',
          textAlign: 'center',
          padding: '10px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#f7c948',
          letterSpacing: '2px',
        }}
      >
        <span style={{ display: 'inline-block', animation: 'bounce-ud 0.8s ease-in-out infinite', marginRight: '8px' }}>🚧</span>
        THIS SITE IS UNDER CONSTRUCTION!! COME BACK EVERY DAY 4 UPDATES!!
        <span style={{ display: 'inline-block', animation: 'bounce-ud 0.8s ease-in-out infinite 0.4s', marginLeft: '8px' }}>🚧</span>
      </div>
      <div style={{ padding: '6px 0' }} className="construction-bar" aria-label="Under construction banner" />

      {/* ====== RAINBOW DIVIDER ====== */}
      <div className="rainbow-divider" />

      {/* ====== ABOUT SECTION ====== */}
      <section
        style={{ background: '#000022', padding: '40px 16px', borderBottom: '4px double #00ffff' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Impact, fantasy',
              fontSize: 'clamp(36px, 8vw, 64px)',
              textAlign: 'center',
              animation: 'rainbow-text-anim 1.2s linear infinite',
              marginBottom: '24px',
              letterSpacing: '3px',
            }}
          >
            ~~ ABOUT US ~~
          </h2>

          <div
            style={{
              border: '4px solid #ff00ff',
              background: 'rgba(255,0,255,0.05)',
              padding: '20px',
              marginBottom: '20px',
              animation: 'rainbow-border-anim 3s linear infinite',
            }}
          >
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#eee' }}>
              <span style={{ animation: 'star-twinkle-anim 1s ease-in-out infinite', display: 'inline-block' }}>✨</span>{' '}
              We have been best friends since like FOREVER!! We do everything together —
              road trips, concerts, random 2am drives, camping trips, and way too many pizza nights.
              This website is our digital home where we keep all our memories, photos n stuff!!
              {' '}<span style={{ animation: 'star-twinkle-anim 1.3s ease-in-out infinite 0.5s', display: 'inline-block' }}>✨</span>
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#eee', marginTop: '12px' }}>
              We started this site because we wanted a place that was{' '}
              <span style={{ color: '#ffff00', fontWeight: 'bold', animation: 'blink-anim 1.5s step-end infinite', display: 'inline' }}>
                100% OURS
              </span>{' '}
              and not owned by some corporation lol!! Bookmark this page and check back 4 updates!!
              We post new stuff like every week!! (when we remember)
            </p>
          </div>

          {/* Fun facts table */}
          <table
            style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', color: '#ccc', border: '3px solid #00ff00' }}
            aria-label="Fun facts about our crew"
          >
            <thead>
              <tr style={{ background: '#003300' }}>
                <th style={{ padding: '8px', border: '1px solid #00ff00', color: '#00ff00', textAlign: 'left' }}>FACT</th>
                <th style={{ padding: '8px', border: '1px solid #00ff00', color: '#00ff00', textAlign: 'left' }}>INFO</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Total friends', '6 (and counting??)'],
                ['Years of friendship', 'Like 5?? We lost count'],
                ['Road trips taken', '12 (and survived all of them)'],
                ['Shared playlists', '47 (ask riley 4 the aux)'],
                ['Inside jokes', 'Literally uncountable'],
                ['Group chat name', '"THE CREW 🔥" (we r very creative)'],
              ].map(([fact, info], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#001100' : '#001a00' }}>
                  <td style={{ padding: '8px', border: '1px solid #005500', color: '#88ff88' }}>{fact}</td>
                  <td style={{ padding: '8px', border: '1px solid #005500' }}>{info}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== RAINBOW DIVIDER ====== */}
      <div className="rainbow-divider" />

      {/* ====== CREW SECTION ====== */}
      <section style={{ background: '#050505', padding: '40px 16px' }}>
        <h2
          style={{
            fontFamily: 'Impact, fantasy',
            fontSize: 'clamp(36px, 8vw, 64px)',
            textAlign: 'center',
            letterSpacing: '4px',
            marginBottom: '10px',
          }}
          className="neon-cyan"
        >
          ~*~ MEET THE CREW ~*~
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#888',
            fontSize: '14px',
            marginBottom: '32px',
            fontStyle: 'italic',
          }}
        >
          these r my best frends in the whole world!! dont mess with them!!
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {friends.map((f) => (
            <div
              key={f.name}
              style={{
                background: f.bg,
                border: `4px ${f.borderStyle} ${f.border}`,
                padding: '20px',
                textAlign: 'center',
                position: 'relative',
                animation: 'rainbow-border-anim 4s linear infinite',
              }}
            >
              {/* Spinning icon top-right */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute', top: '8px', right: '10px',
                  fontSize: '18px',
                  animation: f.anim,
                  display: 'inline-block',
                  color: f.color,
                }}
              >
                {f.spin}
              </span>

              {/* Avatar circle */}
              <div
                style={{
                  width: '70px', height: '70px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${f.color}33, ${f.border}22)`,
                  border: `3px solid ${f.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px',
                  fontSize: '28px',
                  boxShadow: `0 0 16px ${f.border}66`,
                }}
                aria-label={`${f.name} avatar placeholder`}
              >
                {f.icon}
              </div>

              {/* Name */}
              <div
                style={{
                  fontFamily: f.nameFont,
                  fontSize: '26px',
                  color: f.color,
                  fontWeight: 'bold',
                  textShadow: `0 0 8px ${f.color}, 0 0 16px ${f.color}`,
                  marginBottom: '4px',
                }}
              >
                {f.name}
              </div>

              {/* Role */}
              <div
                style={{
                  fontFamily: "'Times New Roman', serif",
                  fontStyle: 'italic',
                  color: '#aaa',
                  fontSize: '13px',
                  marginBottom: '10px',
                  animation: 'blink-anim 2s step-end infinite',
                }}
              >
                ~~ {f.role} ~~
              </div>

              {/* Description */}
              <p style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.6' }}>
                {f.desc}
              </p>

              {/* AIM-style status */}
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '11px',
                  color: '#ffff00',
                  fontFamily: "'Courier New', monospace",
                }}
              >
                <span style={{ color: '#00ff00' }}>●</span> Online — AIM: {f.name.toLowerCase()}2001
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== RAINBOW DIVIDER ====== */}
      <div className="rainbow-divider" />

      {/* ====== GALLERY ====== */}
      <section style={{ background: '#0a0010', padding: '40px 16px' }}>
        <h2
          style={{
            fontFamily: 'Impact, fantasy',
            fontSize: 'clamp(32px, 7vw, 58px)',
            textAlign: 'center',
            marginBottom: '8px',
            letterSpacing: '3px',
          }}
          className="neon-pink"
        >
          ★ PHOTO ALBUM ★
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#888',
            fontSize: '13px',
            marginBottom: '8px',
          }}
        >
          ~*~ our best memories 4ever ~*~
        </p>
        <p
          style={{
            textAlign: 'center',
            fontSize: '14px',
            color: '#ff00ff',
            marginBottom: '28px',
            animation: 'blink-anim 1s step-end infinite',
          }}
        >
          !! REAL PHOTOS COMING SOON — UPLOADING ON 56K MODEM !!
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                padding: '10px 10px 40px',
                transform: `rotate(${item.rot})`,
                boxShadow: '4px 4px 16px rgba(0,0,0,0.8), 0 0 20px #ff00ff44',
                transition: 'transform 0.2s ease',
              }}
            >
              {/* Photo placeholder */}
              <div
                style={{
                  background: item.bg,
                  height: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  border: '2px solid rgba(255,255,255,0.2)',
                }}
                aria-label={item.caption + ' photo placeholder'}
              >
                {item.emoji}
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '6px', fontFamily: 'Arial, sans-serif' }}>
                  [ photo here ]
                </span>
              </div>
              {/* Caption */}
              <p
                style={{
                  color: '#111',
                  fontSize: '11px',
                  fontFamily: "'Comic Sans MS', cursive",
                  textAlign: 'center',
                  marginTop: '8px',
                  lineHeight: '1.3',
                }}
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== RAINBOW DIVIDER ====== */}
      <div className="rainbow-divider" />

      {/* ====== GUESTBOOK ====== */}
      <section style={{ background: '#000d00', padding: '40px 16px', borderBottom: '4px solid #00ff00' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Impact, fantasy',
              fontSize: 'clamp(30px, 6vw, 52px)',
              textAlign: 'center',
              marginBottom: '8px',
              letterSpacing: '2px',
            }}
            className="neon-green"
          >
            ✉ GUESTBOOK ✉
          </h2>

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span
              style={{
                background: '#003300',
                border: '2px solid #00ff00',
                color: '#00ff00',
                padding: '8px 20px',
                fontWeight: 'bold',
                fontSize: '14px',
                display: 'inline-block',
                cursor: 'pointer',
                animation: 'pulse-scale-anim 1.5s ease-in-out infinite',
              }}
            >
              ✏️ SIGN MY GUESTBOOK!!
            </span>
            <p style={{ color: '#555', fontSize: '12px', marginTop: '6px' }}>
              (functionality coming soon when we learn more HTML)
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {guestbook.map((entry, i) => (
              <div
                key={i}
                style={{
                  background: '#001100',
                  border: `2px solid ${entry.color}`,
                  padding: '14px 16px',
                  boxShadow: `0 0 8px ${entry.color}44`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span style={{ color: entry.color, fontWeight: 'bold', fontSize: '15px' }}>
                    {entry.user}
                  </span>
                  <span style={{ color: '#555', fontSize: '11px', fontFamily: "'Courier New', monospace" }}>
                    AIM: {entry.aim} | {entry.date}
                  </span>
                </div>
                <p style={{ color: '#ddd', fontSize: '14px', lineHeight: '1.6' }}>{entry.msg}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '20px',
              textAlign: 'center',
              color: '#555',
              fontSize: '13px',
              fontFamily: "'Courier New', monospace",
            }}
          >
            Showing entries 1–4 of 4 total | This guestbook powered by GuestWorld™ 1998
          </div>
        </div>
      </section>

      {/* ====== RAINBOW DIVIDER ====== */}
      <div className="rainbow-divider" />

      {/* ====== MIDI NOTICE ====== */}
      <div
        style={{
          background: '#110011',
          border: '2px dashed #ff00ff',
          padding: '12px 20px',
          textAlign: 'center',
          fontSize: '13px',
          color: '#ff88ff',
        }}
      >
        <span style={{ display: 'inline-block', animation: 'bounce-ud 1s ease-in-out infinite', marginRight: '8px' }}>🎵</span>
        <strong>MUSIC:</strong> &quot;All Star&quot; by Smash Mouth is currently loading in the background...
        <em style={{ color: '#888', marginLeft: '8px' }}>(requires RealPlayer plugin v5.0 or higher)</em>
        <span style={{ display: 'inline-block', animation: 'bounce-ud 1s ease-in-out infinite 0.5s', marginLeft: '8px' }}>🎶</span>
      </div>

      {/* ====== FOOTER CONSTRUCTION ====== */}
      <div style={{ padding: '6px 0' }} className="construction-bar" aria-label="Under construction banner" />

      <footer style={{ background: '#000000', padding: '32px 16px 20px', textAlign: 'center', borderTop: '4px double #ff00ff' }}>
        {/* Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px', marginBottom: '20px' }}>
          {badges.map((b) => (
            <span
              key={b.text}
              className="retro-badge"
              style={{ background: b.bg, color: b.color, borderColor: b.color }}
            >
              {b.text}
            </span>
          ))}
        </div>

        {/* Award graphic (CSS-only) */}
        <div
          style={{
            display: 'inline-flex',
            background: 'radial-gradient(circle, #441100, #220800)',
            border: '4px solid #ff8800',
            borderRadius: '50%',
            width: '90px',
            height: '90px',
            fontSize: '10px',
            color: '#ffcc00',
            padding: '8px',
            marginBottom: '16px',
            fontWeight: 'bold',
            boxShadow: '0 0 20px #ff880066',
            animation: 'spin-cw 10s linear infinite',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column' as const,
            textAlign: 'center',
          }}
          aria-label="Best website award"
        >
          <span style={{ fontSize: '20px', display: 'block' }}>🏆</span>
          BEST SITE<br/>OF 1999
        </div>

        {/* Main footer text */}
        <p
          style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: '13px',
            color: '#666',
            marginBottom: '8px',
          }}
        >
          ~~~ MORE FEATURES COMING SOON!! ~~~<br />
          Events Page • Our Blog • Shared Playlist • Poll of the Week • Hit Counter API
        </p>

        <p style={{ color: '#444', fontSize: '12px', fontFamily: "'Courier New', monospace", marginBottom: '12px' }}>
          Best viewed in 800×600 resolution • 16-bit color • Enable JavaScript • Allow popups
        </p>

        <p style={{ color: '#333', fontSize: '11px', fontFamily: "'Courier New', monospace" }}>
          © {new Date().getFullYear()} OurCrew.geocities.com — All Rights Reserved<br />
          This page has been visited{' '}
          <span style={{ color: '#00ff00' }}>69,420</span> times since 1999
          <span style={{ animation: 'cursor-blink 1s step-end infinite', display: 'inline', color: '#00ff00' }}>█</span>
        </p>

        {/* WebRing */}
        <div style={{ marginTop: '16px', color: '#333', fontSize: '11px', fontFamily: "'Courier New', monospace" }}>
          [ ← Prev ] — <span style={{ color: '#555' }}>GeoCities Personal Pages WebRing</span> — [ Next → ]<br />
          <span style={{ color: '#222' }}>[ List Sites ] [ Join Ring ] [ Random Site ]</span>
        </div>
      </footer>

      {/* ====== BOTTOM MARQUEE ====== */}
      <div style={{ background: '#000000', borderTop: '3px solid #ff00ff', overflow: 'hidden', padding: '6px 0' }}>
        <div
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation: 'marquee-scroll 40s linear infinite',
            color: '#ff00ff',
            fontSize: '13px',
            fontWeight: 'bold',
          }}
        >
          {'♥ thanks 4 visiting!! add us to ur favorites!! tell ur friends!! email us!! bookmark this!! ♥ ' +
            'dont forget 2 sign the guestbook!! we check it every day!! ♥ more photos uploading on our 56k modem!! ♥ ' +
            '♥ thanks 4 visiting!! add us to ur favorites!! tell ur friends!! email us!! bookmark this!! ♥ ' +
            'dont forget 2 sign the guestbook!! we check it every day!! ♥ more photos uploading on our 56k modem!! ♥ '}
        </div>
      </div>

      {/* ====== CLIPPY (client-side) ====== */}
      <ClippyLoader />
    </main>
  );
}
