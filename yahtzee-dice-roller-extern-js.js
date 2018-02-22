function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function random() {
    document.getElementById("dice-1").value = getRandomInteger(1, 12);   
    document.getElementById("dice-2").value = getRandomInteger(1, 12);
    document.getElementById("dice-3").value = getRandomInteger(1, 12);   
    document.getElementById("dice-4").value = getRandomInteger(1, 12);
    document.getElementById("dice-5").value = getRandomInteger(1, 12);   
    document.getElementById("dice-6").value = getRandomInteger(1, 12);
    document.getElementById("dice-7").value = getRandomInteger(1, 12);   
}