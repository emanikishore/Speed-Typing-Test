let quoteDisplay = document.getElementById("quoteDisplay");
let timer = document.getElementById("timer");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

spinner.classList.remove("d-none");
quoteDisplay.classList.add("d-none");

let options = {
    method: "GET"
}

fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        spinner.classList.add("d-none");
        quoteDisplay.classList.remove("d-none");
        quoteDisplay.textContent = (jsonData.content);
    })

let counter = parseInt(timer.textContent);

let uniqueId = setInterval(function() {
    counter = counter + 1;
    timer.textContent = counter;
}, 1000)

function stopTimer() {
    clearInterval(uniqueId);
}

submitBtn.onclick = function() {
    let inputVal = quoteInput.value;
    let machineVal = quoteDisplay.textContent;
    if (inputVal === machineVal) {
        stopTimer();
        result.textContent = "You typed in " + counter + "seconds";
    } else {
        result.textContent = "You typed incorrect sentence";
    }
}

resetBtn.onclick = function() {
    spinner.classList.remove("d-none");
    quoteDisplay.classList.add("d-none");
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplay.classList.remove("d-none");
            quoteDisplay.textContent = (jsonData.content);
        })

    timer.textContent = 0;
    quoteInput.value = "";
}
