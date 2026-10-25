const arr = document.querySelectorAll(".sq");
const n = document.querySelector(".n");
const timer = document.querySelector(".timer");
const status = document.querySelector(".status");

let good = [];
let counter = 10;
let x = 0;
let res = 0;
let used = [];

let users = JSON.parse(localStorage.getItem("users")) || [];
let current = users.find(u => u.userName === localStorage.getItem("currentUser"));

function updateStats() {
    localStorage.setItem("users", JSON.stringify(users));
    status.innerHTML = `ניצחונות: ${current.win} | הפסדים: ${current.lose}`;
}

const add = () => {
    counter = 10;
    timer.innerHTML = counter;
    clearInterval(x);
    
    if (good.length === 100) {
        current.win += 1;
        updateStats();
        alert("ניצחת את כל הלוח!");
        return;
    }

    x = setInterval(() => {
        timer.innerHTML = --counter;
        if (counter < 0) {
            clearInterval(x);
            current.lose += 1;
            updateStats();
            alert("GameOver - הזמן נגמר! 😥");
            add();
        }
    }, 1000);

    let location = Math.floor(Math.random() * arr.length);
    while (good.includes(location)) {
        location = Math.floor(Math.random() * arr.length);
    }
    
    res = Math.floor(Math.random() * 100) + 1;
    n.innerHTML = res;

    used = [];
    for (let i = 0; i < arr.length; i++) {
        if (good.includes(i)) continue;
        let num = Math.floor(Math.random() * 100) + 1;
        while (used.includes(num) || num === res) {
            num = Math.floor(Math.random() * 100) + 1;
        }
        arr[i].innerHTML = (i === location) ? res : num;
        used.push(arr[i].innerHTML);
    }
};

arr.forEach((el, i) => {
    el.addEventListener("click", () => {
        if (Number(el.innerHTML) === res) {
            el.innerHTML = '😜';
            good.push(i);
            add();
        } else {
            current.lose += 1;
            updateStats();
            alert("GameOver - טעות! 😥");
            add();
        }
    });
});

updateStats();
add();