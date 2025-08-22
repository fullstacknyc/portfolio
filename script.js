// ===== 1) Hello rotator (your original idea, cleaned up) =====
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

// ===== 2) Infinite feed =====
const feed = document.getElementById('feed');
const sentinel = document.getElementById('sentinel');

let cardCount = 0;
const BATCH = 6;         // how many to add per load
const MAX_CARDS = 9999;  // safety cap

function makeLabCard(i) {
  const section = document.createElement('section');
  section.className = 'card lab';
  section.innerHTML = `
    <div class="content">
      <h2>Lab #${i}</h2>
      <p>A tiny slice of UI. Scroll for more.</p>
      <a class="btn" href="#" aria-disabled="true">Coming soon</a>
    </div>
  `;
  return section;
}

// House promo every N cards (placeholder for future ads)
function makeHousePromo() {
  const wrap = document.createElement('section');
  wrap.className = 'card';
  wrap.innerHTML = `<div class="ad-slot">House promo / sponsor spot</div>`;
  return wrap;
}

function appendBatch() {
  if (cardCount >= MAX_CARDS) return;

  const frag = document.createDocumentFragment();
  for (let k = 0; k < BATCH; k++) {
    cardCount++;
    // Every 6th item, drop a house promo slot (later can become real ad)
    if (cardCount > 1 && cardCount % 6 === 0) {
      frag.appendChild(makeHousePromo());
    } else {
      frag.appendChild(makeLabCard(cardCount));
    }
  }
  // Insert before sentinel, then move sentinel to end
  feed.insertBefore(frag, sentinel);
  feed.appendChild(sentinel);
}

// initial content
appendBatch();

// Observer to load more when sentinel is near view end
const io = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (e.isIntersecting) appendBatch();
  }
}, {
  root: feed,            // observe within the scrolling container
  rootMargin: '200px',   // prefetch ahead of time
  threshold: 0
});
io.observe(sentinel);

// Fallback button if IntersectionObserver is missing
if (!('IntersectionObserver' in window)) {
  const btn = document.createElement('button');
  btn.textContent = 'Load more';
  btn.className = 'btn';
  btn.style.position = 'fixed';
  btn.style.bottom = '16px';
  btn.style.right = '16px';
  btn.addEventListener('click', appendBatch);
  document.body.appendChild(btn);
}
