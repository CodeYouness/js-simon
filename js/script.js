/*<main>

<p>25</p>*/
const numbersContainer = document.querySelector('main')
const numberEl = document.createElement('p')
let blacklistComputer = []
let blacklistUser = []

while (blacklistComputer.length < 5) {
    const casualNumber = Math.floor(Math.random() * 100)
    if (blacklistComputer.includes(casualNumber) === false) {
        blacklistComputer.push(casualNumber)
    }
}

numberEl.textContent = blacklistComputer.join('-')
numbersContainer.appendChild(numberEl)


setTimeout(function () {
    numbersContainer.innerHTML = ''
    const rightNumber = []
    const wrongNumber = []
    while ((rightNumber.length + wrongNumber.length) < 5) {
        const userNumber = Number.parseInt(prompt('whats the number displayed?'), 10)
        // se il numero utente è presente in right number o wrong number, non fai niente
        if ((rightNumber.includes(userNumber) || wrongNumber.includes(userNumber))) {
            alert('You have already entered this number.');
        } else if (rightNumber.includes(userNumber) === false && wrongNumber.includes(userNumber) === false && (blacklistComputer.includes(userNumber))) {
            rightNumber.push(userNumber)
        } else {
            wrongNumber.push(userNumber)
        }
    }

    alert(`right number: ${rightNumber.length} with: ${rightNumber}, the computer number was: ${blacklistComputer}`)


}, 3000)