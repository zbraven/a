let kaosTime = 15;
let depremTime = 24;
let direncTime = 260;

const kaosElem = document.getElementById('kaos');
const depremElem = document.getElementById('deprem');
const direncElem = document.getElementById('direnc');

function updateCounters() {
    if (kaosTime > 0) kaosTime--;
    if (depremTime > 0) depremTime--;
    if (direncTime > 0) direncTime--;

    kaosElem.textContent = kaosTime;
    depremElem.textContent = depremTime;
    direncElem.textContent = direncTime;

    if (kaosTime <= 10) {
        kaosElem.classList.add('alert');
    } else {
        kaosElem.classList.remove('alert');
    }

    if (depremTime <= 10) {
        depremElem.classList.add('alert');
    } else {
        depremElem.classList.remove('alert');
    }

    if (direncTime <= 10) {
        direncElem.classList.add('alert');
    } else {
        direncElem.classList.remove('alert');
    }
}

setInterval(updateCounters, 1000);
