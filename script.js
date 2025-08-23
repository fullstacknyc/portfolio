(() => {
  const stage = document.getElementById('stage');
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rtl = new Set(['ar', 'he', 'fa', 'ur', 'ps']);

  // States: -1 = Hello intro, then 0..2 = pages
  let state = -1;
  let wheelLock = false;
  let typerStop = null; // cleanup for typewriter

  const LANGS = [
    ['Hello','en'],['Hola','es'],['Bonjour','fr'],['Hallo','de'],['Ciao','it'],
    ['こんにちは','ja'],['你好','zh'],['안녕하세요','ko'],['नमस्ते','hi'],['مرحبا','ar']
  ];

  // ---------- helpers
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  function render(el, label) {
    stage.setAttribute('aria-label', label);
    stage.replaceChildren(el);
    el.classList.add('fade-in');
  }

  // ---------- screens
  function screenHello() {
    const wrap = document.createElement('section'); wrap.className = 'screen';
    const title = document.createElement('h1');
    title.id = 'hello';
    title.className = 'caret';            // blinking caret
    title.textContent = '';               // will be typed in
    const tip = document.createElement('p');
    tip.className = 'muted';
    tip.textContent = 'Scroll, click, or press Enter to continue.';
    wrap.append(title, tip);

    // typewriter cycle (slow + readable)
    const speed = 110;     // ms per character
    const hold  = 900;     // ms hold after a word
    let i = 0, stopped = false;

    const typeWord = async (text, lang) => new Promise(async (resolve) => {
      // set direction & lang for proper centering/RTL rendering
      title.lang = lang;
      title.dir = rtl.has(lang) ? 'rtl' : 'ltr';
      title.textContent = '';
      // type characters
      for (let c = 0; c < text.length && !stopped; c++) {
        title.textContent += text[c];
        await sleep(prefersReduced ? 0 : speed);
      }
      await sleep(prefersReduced ? 0 : hold);
      resolve();
    });

    async function loop() {
      while (!stopped) {
        const [word, lang] = LANGS[i++ % LANGS.length];
        await typeWord(word, lang);
      }
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    // start the loop
    loop();

    // teardown
    typerStop = () => { stopped = true; };

    return wrap;
  }

  function screenHome() {
    const s = document.createElement('section'); s.className = 'screen';
    const h = document.createElement('h1'); h.textContent = 'Welcome to my portfolio';
    const p = document.createElement('p'); p.className = 'muted'; p.textContent = 'Minimal, fast, JavaScript-first.';
    s.append(h, p);
    return s;
  }

  function screenLinks() {
    const s = document.createElement('section'); s.className = 'screen';
    const h = document.createElement('h2'); h.textContent = 'Find me online';
    const row = document.createElement('div'); row.className = 'row';
    const a1 = link('LinkedIn', 'https://www.linkedin.com/in/your-handle');
    const a2 = link('GitHub',   'https://github.com/your-handle');
    row.append(a1, a2);
    s.append(h, row);
    return s;
  }

  function screenResume() {
    const s = document.createElement('section'); s.className = 'screen';
    const h = document.createElement('h2'); h.textContent = 'Résumé';
    const p = document.createElement('p'); p.className = 'muted';
    p.textContent = 'Embed a PDF or link here.';
    s.append(h, p);
    return s;
  }

  function link(text, href) {
    const a = document.createElement('a');
    a.href = href; a.target = '_blank'; a.rel = 'noreferrer noopener';
    a.textContent = text;
    return a;
  }

  const SCREENS = [screenHome, screenLinks, screenResume];

  // ---------- transitions
  function goTo(next) {
    // leaving hello? stop typer
    if (state === -1 && typeof typerStop === 'function') {
      typerStop(); typerStop = null;
    }
    state = clamp(next, -1, 2);
    if (state === -1) render(screenHello(), 'Hello intro');
    else render(SCREENS[state](), ['Home','Links','Résumé'][state]);
  }

  // ---------- input: NO mousemove navigation (per your request)
  // Wheel scroll -> step pages. From Hello, any step goes to Home [0].
  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = true;

    const dir = Math.sign(e.deltaY);
    if (dir !== 0) {
      if (state === -1) goTo(0);               // first scroll exits intro → Home
      else goTo(state + (dir > 0 ? 1 : -1));   // pages 0..2
    }
    setTimeout(() => { wheelLock = false; }, 260);
  }, { passive: false });

  // Click or Enter -> exit Hello to Home. On pages, click does nothing special.
  window.addEventListener('click', () => {
    if (state === -1) goTo(0);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (state === -1) goTo(0);
    }
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      if (state === -1) goTo(0); else goTo(state + 1);
    }
    if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      if (state > 0) goTo(state - 1);
      else if (state === 0) goTo(-1); // up from Home returns to Hello
    }
    if (e.key === 'Home') { e.preventDefault(); goTo(-1); }
    if (e.key === 'End')  { e.preventDefault(); goTo(2); }
  });

  // Touch parity (swipe up/down)
  let touchY = null;
  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) touchY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (touchY == null) return;
    const dy = e.touches[0].clientY - touchY;
    if (Math.abs(dy) < 24) return; // deadzone
    e.preventDefault();
    if (state === -1) { goTo(0); touchY = null; return; }
    if (dy < 0) goTo(state + 1); else goTo(state - 1);
    touchY = null;
  }, { passive: false });

  window.addEventListener('touchend', () => { touchY = null; }, { passive: true });

  // Visibility: stop the typewriter when hidden, resume on return.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (state === -1 && typeof typerStop === 'function') { typerStop(); }
    } else {
      if (state === -1 && !typerStop) { render(screenHello(), 'Hello intro'); }
    }
  });

  // boot
  goTo(-1); // start at Hello
})();
