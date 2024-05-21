/*<main>

<p>25</p>*/
const numbersContainer = document.querySelector('main')
let blacklist = []

for (let i = 0; i < 5; i++) {
    let numberEl = document.createElement('p')
    const casualNumber = Math.floor(Math.random() * 100)
    if (!blacklist.includes(casualNumber)) {
        numberEl.textContent = casualNumber
        numbersContainer.appendChild(numberEl)
    }
}