// ====== 0) CONFIG — replace these with your info ======
const CONFIG = {
  NAME: 'Camilo',
  TAGLINE: 'JavaScript dev — I ship small, sharp, fast things.',
  AVATAR_URL: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4', // swap to your pic
  EMAIL: 'you@example.com',
  LINKEDIN_URL: 'https://www.linkedin.com/in/your-handle',
  GITHUB_USER: 'your-github-username',
  RESUME_URL: './assets/Camilo-Resume.pdf',
  COVER_LETTER_URL: './assets/Camilo-Cover-Letter.pdf'
};

// ====== 1) Hero rotator (your original idea) ======
document.addEventListener('DOMContentLoaded', () => {
  const textEl = document.getElementById('hello-rotator');
  const texts = ['hello', 'hola', 'bonjour'];
  let idx = 0;
  const setText = () => { textEl.textContent = texts[idx]; idx = (idx + 1) % texts.length; };
  setText();
  const rotator = setInterval(setText, 2000);
  textEl.addEventListener('mouseover', () => { textEl.textContent = 'welcome to my portfolio'; });
  textEl.addEventListener('mouseout', setText);
});

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
      <ul class="list" aria-label="Notes">
        <li class="small">Keep filenames stable (e.g., <span class="mono">Camilo-Resume.pdf</span>) so links don’t break.</li>
      </ul>
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
