// ====== 0) CONFIG — replace these with your info ======
const CONFIG = {
  NAME: 'Camilo',
  TAGLINE: `Welcome to my portfolio!`,
  AVATAR_URL: 'https://avatars.githubusercontent.com/u/123508794?v=4', // swap to your pic
  EMAIL: 'jgomezval@icloud.com',
  LINKEDIN_URL: 'https://www.linkedin.com/in/camilogomezvalencia/',
  GITHUB_USER: 'fullstacknyc',
  RESUME_URL: 'Profile.pdf',
  COVER_LETTER_URL: './assets/Camilo-Cover-Letter.pdf'
};

// ===== Hello Rotator (big pack, RTL-aware, reduced-motion friendly) =====
(() => {
  const el = document.getElementById('hello-rotator');
  if (!el) return;

  // Languages that read right-to-left
  const RTL = new Set(['ar','fa','he','ur','ps','ku','sd','ug','dv','yi','ckb']);

  // Starter pack — add more anytime. Format: { code, text, name }
  const GREETINGS = [
    // Europe
    {code:'en',text:'Hello',name:'English'},
    {code:'es',text:'Hola',name:'Español'},
    {code:'fr',text:'Bonjour',name:'Français'},
    {code:'de',text:'Hallo',name:'Deutsch'},
    {code:'it',text:'Ciao',name:'Italiano'},
    {code:'pt',text:'Olá',name:'Português'},
    {code:'nl',text:'Hallo',name:'Nederlands'},
    {code:'sv',text:'Hej',name:'Svenska'},
    {code:'no',text:'Hei',name:'Norsk'},
    {code:'da',text:'Hej',name:'Dansk'},
    {code:'fi',text:'Hei',name:'Suomi'},
    {code:'is',text:'Halló',name:'Íslenska'},
    {code:'pl',text:'Cześć',name:'Polski'},
    {code:'cs',text:'Ahoj',name:'Čeština'},
    {code:'sk',text:'Ahoj',name:'Slovenčina'},
    {code:'sl',text:'Živjo',name:'Slovenščina'},
    {code:'hr',text:'Bok',name:'Hrvatski'},
    {code:'sr',text:'Здраво',name:'Srpski'},
    {code:'bs',text:'Zdravo',name:'Bosanski'},
    {code:'mk',text:'Здраво',name:'Македонски'},
    {code:'bg',text:'Здрасти',name:'Български'},
    {code:'ru',text:'Привет',name:'Русский'},
    {code:'uk',text:'Привіт',name:'Українська'},
    {code:'be',text:'Прывітанне',name:'Беларуская'},
    {code:'lt',text:'Labas',name:'Lietuvių'},
    {code:'lv',text:'Sveiki',name:'Latviešu'},
    {code:'et',text:'Tere',name:'Eesti'},
    {code:'hu',text:'Szia',name:'Magyar'},
    {code:'ro',text:'Salut',name:'Română'},
    {code:'el',text:'Γεια',name:'Ελληνικά'},
    {code:'ga',text:'Dia dhuit',name:'Gaeilge'},
    {code:'gd',text:'Halò',name:'Gàidhlig'},
    {code:'cy',text:'Helo',name:'Cymraeg'},
    {code:'eu',text:'Kaixo',name:'Euskara'},
    {code:'ca',text:'Hola',name:'Català'},
    {code:'gl',text:'Ola',name:'Galego'},
    {code:'oc',text:'Bonjorn',name:'Occitan'},
    {code:'br',text:'Demat',name:'Brezhoneg'},
    {code:'sq',text:'Përshëndetje',name:'Shqip'},
    {code:'hy',text:'Բարև',name:'Հայերեն'},
    {code:'ka',text:'გამარჯობა',name:'ქართული'},

    // Middle East / S. Asia
    {code:'ar',text:'مرحبا',name:'العربية'},
    {code:'he',text:'שלום',name:'עברית'},
    {code:'fa',text:'سلام',name:'فارسی'},
    {code:'ur',text:'سلام',name:'اردو'},
    {code:'ps',text:'سلام',name:'پښتو'},
    {code:'tr',text:'Merhaba',name:'Türkçe'},
    {code:'ku',text:'Slaw',name:'Kurdî'},
    {code:'ta',text:'வணக்கம்',name:'தமிழ்'},
    {code:'te',text:'నమస్కారం',name:'తెలుగు'},
    {code:'kn',text:'ನಮಸ್ಕಾರ',name:'ಕನ್ನಡ'},
    {code:'ml',text:'നമസ്കാരം',name:'മലയാളം'},
    {code:'si',text:'ආයුබෝවන්',name:'සිංහල'},
    {code:'hi',text:'नमस्ते',name:'हिन्दी'},
    {code:'bn',text:'নমস্কার',name:'বাংলা'},
    {code:'pa',text:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',name:'ਪੰਜਾਬੀ'},
    {code:'gu',text:'નમસ્તે',name:'ગુજરાતી'},
    {code:'mr',text:'नमस्कार',name:'मराठी'},
    {code:'ne',text:'नमस्ते',name:'नेपाली'},

    // East / SE Asia
    {code:'zh',text:'你好',name:'中文'},
    {code:'yue',text:'你好',name:'廣東話'},
    {code:'ja',text:'こんにちは',name:'日本語'},
    {code:'ko',text:'안녕하세요',name:'한국어'},
    {code:'vi',text:'Xin chào',name:'Tiếng Việt'},
    {code:'th',text:'สวัสดี',name:'ไทย'},
    {code:'lo',text:'ສະບາຍດີ',name:'ລາວ'},
    {code:'km',text:'សួស្តី',name:'ខ្មែរ'},
    {code:'id',text:'Halo',name:'Bahasa Indonesia'},
    {code:'ms',text:'Halo',name:'Bahasa Melayu'},
    {code:'fil',text:'Kumusta',name:'Filipino'},
    {code:'my',text:'မင်္ဂလာပါ',name:'မြန်မာ'},
    {code:'mn',text:'Сайн уу',name:'Монгол'},
    {code:'bo',text:'བཀྲ་ཤིས་བདེ་ལགས་',name:'Tibetan'},

    // Central Asia
    {code:'uz',text:'Salom',name:'Oʻzbekcha'},
    {code:'kk',text:'Сәлем',name:'Қазақша'},
    {code:'ky',text:'Салам',name:'Кыргызча'},
    {code:'tg',text:'Салом',name:'Тоҷикӣ'},
    {code:'tk',text:'Salam',name:'Türkmen'},

    // Africa
    {code:'sw',text:'Hujambo',name:'Kiswahili'},
    {code:'am',text:'ሰላም',name:'Amharic'},
    {code:'so',text:'Salaan',name:'Soomaali'},
    {code:'ha',text:'Sannu',name:'Hausa'},
    {code:'yo',text:'Bawo',name:'Yorùbá'},
    {code:'ig',text:'Ndewo',name:'Igbo'},
    {code:'zu',text:'Sawubona',name:'isiZulu'},
    {code:'xh',text:'Molo',name:'isiXhosa'},
    {code:'af',text:'Hallo',name:'Afrikaans'},
    {code:'sn',text:'Mhoro',name:'Shona'},
    {code:'mg',text:'Manao ahoana',name:'Malagasy'},

    // Oceania & Americas
    {code:'mi',text:'Kia ora',name:'Māori'},
    {code:'sm',text:'Talofa',name:'Samoan'},
    {code:'to',text:'Mālō e lelei',name:'Tongan'},
    {code:'fj',text:'Bula',name:'Fijian'},
    {code:'haw',text:'Aloha',name:'ʻŌlelo Hawaiʻi'},
    {code:'nv',text:'Yáʼátʼééh',name:'Navajo'},
    {code:'chr',text:'ᎣᏏᏲ',name:'Cherokee'}
  ];

  // utilities
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shuffled = GREETINGS.slice().sort(() => Math.random() - 0.5);

  let i = 0, timer = null, paused = false;

  const setGreeting = (g, fade = true) => {
    // direction + lang for proper screen reader pronunciation
    el.lang = g.code;
    el.dir = RTL.has(g.code) ? 'rtl' : 'ltr';

    if (fade && !prefersReduced) {
      el.classList.add('is-fading');
      setTimeout(() => {
        el.textContent = g.text;
        el.classList.remove('is-fading');
      }, 120);
    } else {
      el.textContent = g.text;
    }

    // optional: expose current language name for tooltip/debug
    el.setAttribute('data-lang-name', g.name || g.code);
    el.title = g.name ? `${g.name} (${g.code})` : g.code;
  };

  const tick = () => {
    if (paused) return;
    setGreeting(shuffled[i++ % shuffled.length]);
  };

  // init + interval
  setGreeting(shuffled[i++]);
  timer = setInterval(tick, 1800);

  // interactions
  el.addEventListener('mouseenter', () => {
    paused = true;
    el.dataset.prev = el.textContent;
    el.textContent = 'welcome to my portfolio';
  });
  el.addEventListener('mouseleave', () => {
    paused = false;
    setGreeting(shuffled[(i-1+shuffled.length)%shuffled.length], false);
  });
  // click = pause/resume
  el.addEventListener('click', () => { paused = !paused; });

  // space/enter toggles pause for keyboard users
  el.tabIndex = 0;
  el.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault(); paused = !paused;
    }
  });
})();


// ====== 2) Helpers ======
const feed = document.getElementById('feed');
const sentinel = document.getElementById('sentinel');

function timeAgo(iso) {
  const s = Math.floor((Date.now() - new Date(iso).getTime())/1000);
  const units = [[31536000,'y'],[2592000,'mo'],[604800,'w'],[86400,'d'],[3600,'h'],[60,'m']];
  for (const [sec,label] of units){ if (s >= sec) return Math.floor(s/sec)+label; }
  return s + 's';
}
function safeUrl(u){ try{ return new URL(u).href } catch { return '#' } }

// ====== 3) Portfolio cards ======
function profileCard(){
  const el = document.createElement('section');
  el.className = 'card profile';
  el.innerHTML = `
    <div class="content stack" style="place-items:center;text-align:center">
      <img class="avatar" src="${CONFIG.AVATAR_URL}" alt="${CONFIG.NAME}" />
      <h2>${CONFIG.NAME}</h2>
      <p class="meta">${CONFIG.TAGLINE}</p>
      <div class="row" role="group" aria-label="Primary links">
        <a class="btn" href="${safeUrl(CONFIG.LINKEDIN_URL)}" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn secondary" href="https://github.com/${CONFIG.GITHUB_USER}" target="_blank" rel="noopener">GitHub</a>
        <a class="btn secondary" href="mailto:${CONFIG.EMAIL}">Email</a>
      </div>
      <p class="small">Tip: press <span class="kbd">↓</span> to move to the next card.</p>
    </div>
  `;
  return el;
}

function linksCard(){
  const el = document.createElement('section');
  el.className = 'card links';
  el.innerHTML = `
    <div class="content stack">
      <h2>Resume & Cover Letter</h2>
      <p class="meta">Quick access links. PDFs open in a new tab.</p>
      <div class="row">
        <a class="btn" href="${safeUrl(CONFIG.RESUME_URL)}" target="_blank" rel="noopener">View Resume</a>
        <a class="btn secondary" href="${safeUrl(CONFIG.COVER_LETTER_URL)}" target="_blank" rel="noopener">Cover Letter</a>
      </div>
    </div>
  `;
  return el;
}

function projectsCard(projects = []){
  const el = document.createElement('section');
  el.className = 'card projects';
  const items = projects.length ? projects.map(p => `
      <li>
        <div class="event">
          <div class="top">
            <span class="repo">${p.title}</span>
            <span class="time">${p.status ?? ''}</span>
          </div>
          <div class="small">${p.desc ?? ''}</div>
          <div class="row">
            ${p.live ? `<a class="btn" href="${safeUrl(p.live)}" target="_blank" rel="noopener">Live</a>`:''}
            ${p.code ? `<a class="btn secondary" href="${safeUrl(p.code)}" target="_blank" rel="noopener">Code</a>`:''}
            ${p.case ? `<a class="btn secondary" href="${safeUrl(p.case)}" target="_blank" rel="noopener">Case study</a>`:''}
          </div>
        </div>
      </li>
  `).join('') : `
      <li class="small">No showcases yet—totally fine. Add one when ready (see <span class="mono">PROJECTS</span> in script).</li>
  `;
  el.innerHTML = `
    <div class="content stack">
      <h2>Project Showcase</h2>
      <ul class="list">${items}</ul>
    </div>
  `;
  return el;
}

function askCard(){
  // Lets the site "ask you" and remember ideas (localStorage)
  const el = document.createElement('section');
  el.className = 'card ask';
  el.innerHTML = `
    <div class="content stack">
      <h2>What should I build next?</h2>
      <p class="meta">Type an idea. It’ll be saved locally.</p>
      <form class="row" id="ask-form">
        <input id="ask-input" placeholder="e.g., keyboard nav, image gallery…" 
               style="flex:1;min-width:220px;padding:10px 12px;border-radius:12px;border:1px solid #2a2a2a;background:#121212;color:#fff"/>
        <button class="btn">Save</button>
      </form>
      <ul class="list" id="ask-list" aria-live="polite"></ul>
    </div>
  `;
  queueMicrotask(() => {
    const key = 'camilo_ideas';
    const input = el.querySelector('#ask-input');
    const form = el.querySelector('#ask-form');
    const list = el.querySelector('#ask-list');
    const ideas = JSON.parse(localStorage.getItem(key) || '[]');
    const render = () => list.innerHTML = ideas.map((t,i)=>`<li class="small">${t}</li>`).join('');
    render();
    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = input.value.trim();
      if (!v) return;
      ideas.unshift(v);
      localStorage.setItem(key, JSON.stringify(ideas.slice(0,10)));
      input.value = '';
      render();
    });
  });
  return el;
}

function promoCard(){
  const el = document.createElement('section');
  el.className = 'card';
  el.innerHTML = `<div class="ad-slot">Sponsor/House Promo (reserved, no 3rd-party scripts yet)</div>`;
  return el;
}

// ====== 4) GitHub activity (public API, no token) ======
async function githubCard(user){
  const el = document.createElement('section');
  el.className = 'card github';
  el.innerHTML = `
    <div class="content stack">
      <h2>Recent GitHub Activity</h2>
      <p class="small">Pulls public events via GitHub API. Rate-limited, but fine for a portfolio.</p>
      <ul class="list" id="gh-list"><li class="small">Loading…</li></ul>
    </div>
  `;
  const ul = el.querySelector('#gh-list');
  try{
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/events/public`);
    if (!res.ok) throw new Error('GitHub API error');
    const events = (await res.json()).slice(0, 8);
    if (!events.length) { ul.innerHTML = `<li class="small">No recent public events.</li>`; return el; }
    ul.innerHTML = events.map(e=>{
      const repo = e.repo?.name || 'repo';
      const when = timeAgo(e.created_at);
      const type = e.type.replace('Event','');
      let detail = '';
      if (e.type === 'PushEvent') detail = `${e.payload.commits?.length || 1} commit(s)`;
      if (e.type === 'PullRequestEvent') detail = `${e.payload.action} PR #${e.payload.number}`;
      if (e.type === 'IssuesEvent') detail = `${e.payload.action} issue #${e.payload.issue?.number||''}`;
      return `<li class="event">
        <div class="top"><span class="type">${type}</span><a class="repo" href="https://github.com/${repo}" target="_blank" rel="noopener">${repo}</a><span class="time">${when}</span></div>
        <div class="small">${detail}</div>
      </li>`;
    }).join('');
  } catch(err){
    ul.innerHTML = `<li class="small">Couldn’t load events. <a href="https://github.com/${user}" target="_blank" rel="noopener">Open GitHub</a></li>`;
  }
  return el;
}

// ====== 5) Infinite feed plumbing (same pattern) ======
let cardCount = 0;
const BATCH = 6;
const MAX_CARDS = 9999;

// Add your first “portfolio batch” upfront (before the normal Labs)
(async function seedPortfolio(){
  // 1) Profile
  feed.insertBefore(profileCard(), sentinel);
  // 2) Resume/Cover Letter links
  feed.insertBefore(linksCard(), sentinel);
  // 3) GitHub activity
  feed.insertBefore(await githubCard(CONFIG.GITHUB_USER), sentinel);
  // 4) Project showcase (placeholder list for now)
  const PROJECTS = [
    // Example to fill later:
    // { title:'Image Gallery', desc:'Responsive grid with lazy-loading.', status:'coming soon', live:'#', code:'#', case:'#' }
  ];
  feed.insertBefore(projectsCard(PROJECTS), sentinel);
  // 5) Let the site ask *you* (captures ideas)
  feed.insertBefore(askCard(), sentinel);
  // 6) Promo / future ad slot (kept minimal)
  feed.insertBefore(promoCard(), sentinel);

  // Then start the endless “lab” cards to keep scrolling fun while you build
  appendBatch();
})();

function makeLabCard(i){
  const section = document.createElement('section');
  section.className = 'card';
  section.innerHTML = `
    <div class="content stack">
      <h2>Lab #${i}</h2>
      <p class="small">Tiny UI slice. This space is for experiments while you learn.</p>
      <button class="btn secondary" disabled>Coming soon</button>
    </div>
  `;
  return section;
}

function appendBatch(){
  if (cardCount >= MAX_CARDS) return;
  const frag = document.createDocumentFragment();
  for (let k=0;k<BATCH;k++){
    cardCount++;
    if (cardCount % 8 === 0) frag.appendChild(promoCard());
    else frag.appendChild(makeLabCard(cardCount));
  }
  feed.insertBefore(frag, sentinel);
  feed.appendChild(sentinel);
}

// IntersectionObserver to autoload
const io = new IntersectionObserver(entries=>{
  for (const e of entries) if (e.isIntersecting) appendBatch();
},{ root:feed, rootMargin:'200px', threshold:0 });
io.observe(sentinel);

// Fallback “Load more” if IntersectionObserver missing
if (!('IntersectionObserver' in window)) {
  const btn = document.createElement('button');
  btn.textContent = 'Load more'; btn.className = 'btn';
  btn.style.position = 'fixed'; btn.style.bottom = '16px'; btn.style.right = '16px';
  btn.addEventListener('click', appendBatch);
  document.body.appendChild(btn);
}
