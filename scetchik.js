let counter = 0;

function increaseCounter() {
    counter++;
}

for (let i = 0; i < 3; i++) {
    increaseCounter();
    console.log(counter);
}