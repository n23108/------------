const button = document.querySelector("button");
const pass = document.querySelector(".pass");
const pass2 = document.querySelector(".pass2");
const user = document.querySelector(".user");
const a = document.querySelector(".a");

button.addEventListener("click", (event) => {
    event.preventDefault();
    a.innerHTML = "";

    if (pass.value !== pass2.value) {
        a.innerHTML = "אימות סיסמא נכשל";
        return;
    }
    if (pass.value.length < 8) {
        a.innerHTML = "הסיסמא חייבת להכיל לפחות 8 תווים";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.userName === user.value)) {
        a.innerHTML = "שם משתמש תפוס";
        return;
    }

    const obj = {
        userName: user.value,
        password: pass.value,
        win: 0,
        lose: 0
    };
    
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", user.value);
    window.location.href = "./דף הבית/index.html";
});