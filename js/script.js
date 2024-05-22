/*<main>

<p>25</p>*/
const numbersContainer = document.querySelector('main')
const numberEl = document.createElement('p')
let blacklistComputer = []
let blacklistUser = []

while (blacklistComputer.length < 5) {
    const casualNumber = Math.floor(Math.random() * 100)
    if (!blacklistComputer.includes(casualNumber)) {
        blacklistComputer.push(casualNumber)
    }
}

numberEl.textContent = blacklistComputer.join('-')
numbersContainer.appendChild(numberEl)

setTimeout(function () {
    numberEl.innerHTML = ''


    setTimeout(function () {

        const rightNumber = []
        const wrongNumber = []

        while ((rightNumber.length + wrongNumber.length) < 5) {
            const userNumber = Number.parseInt(prompt('What\'s the number displayed?'), 10)
            // se il numero utente è presente in right number o wrong number, non fai niente
            if ((rightNumber.includes(userNumber) || wrongNumber.includes(userNumber) || isNaN(userNumber))) {
                alert('Please enter a valid number.');
            } else if (!rightNumber.includes(userNumber) && !wrongNumber.includes(userNumber) && blacklistComputer.includes(userNumber)) {
                rightNumber.push(userNumber)
            } else {
                wrongNumber.push(userNumber)
            }
        }

        alert(`right number: ${rightNumber.length} with: ${rightNumber}. The computer numbers were: ${blacklistComputer}`)


    }, 0)
}, 30000)