let word;

function setupWord(initWord, element) {
    word = initWord
    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`)
    })
}

function isLetterInWord(letter) {}

function revealLetterInWord(letter) {}

export {setupWord}