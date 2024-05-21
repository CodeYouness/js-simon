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
        if (!(blacklistUser.includes(userNumber)) && (blacklistComputer.includes(userNumber))) {
            rightNumber.push(userNumber)

        } else if (blacklistUser.includes(userNumber)) {

        } else {
            wrongNumber.push(userNumber)

        }
    }

    alert(`right number: ${rightNumber.length} with: ${rightNumber}, the computer number was: ${blacklistComputer}`)


}, 3000)