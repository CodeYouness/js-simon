/*<main>

<p>25</p>*/
const numbersContainer = document.querySelector('main')
let blacklist = []

while (blacklist.length < 5) {
    let numberEl = document.createElement('p')
    const casualNumber = Math.floor(Math.random() * 100)
    if (blacklist.includes(casualNumber) === false) {
        numberEl.textContent = casualNumber
        numbersContainer.appendChild(numberEl)
        blacklist.push(casualNumber)
    }
    console.log(casualNumber)
}