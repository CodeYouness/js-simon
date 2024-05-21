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
numbersContainer.append(numberEl)


setTimeout(function () {
    const rightNumber = []
    numbersContainer.innerHTML = ''
    while (blacklistUser.length < 5) {
        const userNumber = Number.parseInt(prompt('whats the number displayed?'), 10)
        if (true) {

        }
    }
}, 3000)