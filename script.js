// animation for the text: hello, then hola, then bonjour, and it repeats
const textElement = document.querySelector('p');
const texts = ['hello', 'hola', 'bonjour'];

let currentIndex = 0;
function changeText() {
    textElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
};
setInterval(changeText, 2000); // Change text every 2 seconds
// Initial text
changeText();
// animation for the text: camilo777, then camilo, then cami, and it repeats

// on hover of text, change the text to welcome to my portfolio
textElement.addEventListener('mouseover', () => {
    textElement.textContent = 'welcome to my portfolio';
});
textElement.addEventListener('mouseout', () => {
    changeText();
});
