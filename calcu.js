let display = document.getElementById("display");

function appendValue(val) {
    if (display.innerText === "0" && !isNaN(val)) {
        display.innerText = val;
    } else if (val === '<') {
        display.innerText = display.innerText.slice(0, -1) || "0";
    } else {
        display.innerText += val;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('x', '*'));
    } catch {
        display.innerText = "Error";
    }
}
