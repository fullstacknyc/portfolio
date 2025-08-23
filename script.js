const slides = [
    // 1) Hello rotator
    () => {
        const s = document.createElement('section'); s.className = 'section';
        const h = document.createElement('h1'); h.id = 'hello'; h.textContent = 'hello';
        s.appendChild(h);

        const rtl = new Set(['ar', 'he', 'fa', 'ur', 'ps']);
        const list = [
      ['Hello','en'],['Hola','es'],['Bonjour','fr'],['Hallo','de'],['Ciao','it'],
      ['こんにちは','ja'],['你好','zh'],['안녕하세요','ko'],['नमस्ते','hi'],['مرحبا','ar']
    ];
        let i = 0;
        const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const show = ([text, lang]) => { h.lang = lang; h.dir = rtl.has(lang) ? 'rtl' : 'ltr'; h.textContent = text; };
        show(list[i++ % list.length]);
        if (!reduced) setInterval (() => show(list[i++ % list.length]), 1800);
        return s;
    },

    // 2) Next tab
    () => {
        const s = document.createElement('section'); s.className = 'section';
        const h = document.createElement('h2'); h.textContent = 'My JavaScript Portfolio';
        s.appendChild(h);
        return s;
    }
];

// Render tabs
const feed = document.getElementById('feed');
slides.forEach(make => feed.appendChild(make()));