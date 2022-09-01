let previousSaveEl = document.getElementById("previous-save-el")
let totalSaveEl = document.getElementById("total-save-el")
let countEl = document.getElementById("count-el")
let count = 0
let total = 0

function increment() {
    count += 1
    total += 1
    countEl.textContent = count
}

function save() {
    if (!previousSaveEl.textContent) {
        previousSaveEl.textContent = 'Previous classes: '
    } else {
        previousSaveEl.textContent += ', '
    }
    previousSaveEl.textContent += count
    totalSaveEl.textContent = 'Total: ' + total
    countEl.textContent = 0
    count = 0
}
