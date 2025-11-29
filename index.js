let ball = document.querySelector("#Ball");
let startBtn = document.querySelector("#startbtn");
let stopBtn = document.querySelector("#stopbtn");

let position = 10;
let speed = 3;
let direction = 1;
let interval = null;

startBtn.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(moveBall, 10);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

function moveBall() {
    position += speed * direction;
    ball.style.top = position + "px";

    let limit = document.querySelector(".container").clientHeight - 60;

    if (position >= limit || position <= 0) {
        direction *= -1;
    }
}
