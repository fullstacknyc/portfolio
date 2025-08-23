const el = document.getElementById('hello');
const rtl = new Set(['ar','he','fa','ur','ps']);
const list = [
  ['Hello','en'],['Hola','es'],['Bonjour','fr'],['Hallo','de'],['Ciao','it'],
  ['Olá','pt'],['Привет','ru'],['こんにちは','ja'],['你好','zh'],['안녕하세요','ko'],
  ['नमस्ते','hi'],['مرحبا','ar'],['שלום','he'],['Kia ora','mi'],['Aloha','haw']
];

let i = 0;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
function show([text, lang]) {
  el.lang = lang;
  el.dir = rtl.has(lang) ? 'rtl' : 'ltr';
  el.textContent = text;
}
show(list[i++ % list.length]);
if (!reduced) setInterval(() => show(list[i++ % list.length]), 1800);
