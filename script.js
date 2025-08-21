let ledStates = [false, false, false, false]; // LED-ek kiinduló állapota
let chaseInterval = null;

function toggleLed(index) {
    const led = document.getElementById("led" + index);
    const color = document.getElementById("color" + index).value;

    if (ledStates[index]) {
        led.style.background = "#555"; // kikapcsolva
        ledStates[index] = false;
    } else {
        led.style.background = color; // bekapcsolva
        ledStates[index] = true;
    }
}

function clearAll() {
    for (let i = 0; i < 4; i++) {
        document.getElementById("led" + i).style.background = "#555";
        ledStates[i] = false;
    }
}


// Futófény 1: oda-vissza
function runChase1() {
    stopChase();
    let i = 0;
    let direction = 1;

    chaseInterval = setInterval(() => {
        clearAll();

        const led = document.getElementById("led" + i);
        const color = document.getElementById("color" + i).value;
        led.style.background = color;

        i += direction;
        if (i > 3) {
            i = 2;
            direction = -1;
        } else if (i < 0) {
            i = 1;
            direction = 1;
        }
    }, 500);
}

// Futófény 2: körfutás
function runChase2() {
    stopChase();
    let i = 0;

    chaseInterval = setInterval(() => {
        clearAll();

        const led = document.getElementById("led" + i);
        const color = document.getElementById("color" + i).value;
        led.style.background = color;

        i++;
        if (i > 3) {
            i = 0;
        }
    }, 500);
}

function stopChase() {
    if (chaseInterval) {
        clearInterval(chaseInterval);
        chaseInterval = null;
    }
}
