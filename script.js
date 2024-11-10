const textArray = [
    "I build websites.",
    "I build dashboards.",
    "I build bots."
];

let index = 0;
const changingTextElement = document.getElementById("changingText");

function changeText() {
    changingTextElement.textContent = textArray[index];
    index = (index + 1) % textArray.length;
}

setInterval(changeText, 2000);  // Change text every 2 seconds
