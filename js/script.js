let bulbBtn = document.getElementById("bulbBtn");

let isLightOn = false;

bulbBtn.addEventListener("click", function() {
    if (isLightOn === false) {
        document.body.style.backgroundColor = "#ffeb3b";
        bulbBtn.innerText = "Turn Off 🌑";
        isLightOn = true;
    } else {
        document.body.style.backgroundColor = "#242424";
        bulbBtn.innerText = "Turn On ☀️";
        isLightOn = false;
    }
})


let nameInput = document.getElementById("nameInput");
let greetBtn = document.getElementById("greetBtn");
let welcomeMsg = document.getElementById("welcomeMsg");
let redtBtn = document.getElementById("redtBtn");

greetBtn.addEventListener("click", function() {
    let userName = nameInput.value;

    if (userName === "") {
        welcomeMsg.innerText = "Hey man! At least write your name first! 😅";
    } else {
        welcomeMsg.innerText = "Welcome, " + userName + "!";
    }

})

redtBtn.addEventListener("click", function() {
    nameInput.value = "";
    welcomeMsg.innerText = "";
})