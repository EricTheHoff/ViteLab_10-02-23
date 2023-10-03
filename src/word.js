let word;

function setupWord(element, initWord) {
    word = initWord
    word.split('').forEach((letter) => {
        element.innerHTML += `<div class="letter-box"></div>`
    })
}

function isLetterInWord(letter) {
    return word.includes(letter)
}

function revealLetterInWord(letter) {
    let allBoxes = document.querySelectorAll(`.letter-box`)
    word.split('').forEach((wordLetter, idx) => {
        if(wordLetter === letter) {
            allBoxes[idx].innerHTML = letter
        }
    })
}

export {setupWord, isLetterInWord, revealLetterInWord}