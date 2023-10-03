import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { setupWord } from './src/word.js';
const word = getRandomWord()

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  // const word = getRandomWord()

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
  setSharkImage(document.querySelector(`#shark-img`), numWrong)
  setupWord(word, document.querySelector('#word-container'))
};

initSharkwords();
console.log(word)
// setupWord(word, document.querySelector('#word-container'))