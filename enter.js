const button = document.querySelector("button");
const pass = document.querySelector(".pass");
const user = document.querySelector(".user");
const a = document.querySelector(".a");

button.addEventListener("click", (event) => {
    event.preventDefault();
    a.innerHTML = "";

    if (pass.value.length < 8) {
        a.innerHTML = "סיסמא קצרה מידי (מינימום 8 תווים) 😕";
        return;
    }

    let arr = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = arr.find(u => u.userName === user.value);

    if (foundUser) {
        if (foundUser.password === pass.value) {
            localStorage.setItem("currentUser", user.value);
            window.location.href = "./דף הבית/index.html";
        } else {
            a.innerHTML = "סיסמא שגויה";
        }
    } else {
        a.innerHTML = "שם המשתמש לא קיים במערכת";
    }
});
