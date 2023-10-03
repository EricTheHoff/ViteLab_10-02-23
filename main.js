import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess.js';
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
  setupWord(document.querySelector('#word-container'), word)

  const handleGuess = (guessEvent, letter) => {
    guessEvent.target.disabled = true
    if(isLetterInWord(letter)) {
      revealLetterInWord(letter)
    } else {
      numWrong++
      setSharkImage(document.querySelector(`#shark-img`), numWrong)
    }
  };
  
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
};

initSharkwords();
console.log(word)
// setupWord(word, document.querySelector('#word-container'))