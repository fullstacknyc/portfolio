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