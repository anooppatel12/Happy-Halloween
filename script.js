const ghost = document.getElementById('ghost');
const bat = document.getElementById('bat');
const pumpkin = document.getElementById('pumpkin');

function randomPosition(element) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the dimensions of the element
    const rect = element.getBoundingClientRect();
    const elementWidth = rect.width;
    const elementHeight = rect.height;

    // Generate random positions while ensuring the element stays within the viewport
    const randomX = Math.random() * (windowWidth - elementWidth);
    const randomY = Math.random() * (windowHeight - elementHeight);

    return { randomX, randomY };
}

function moveGhost() {
    const { randomX, randomY } = randomPosition(ghost);
    ghost.style.left = `${randomX}px`;
    ghost.style.bottom = `${randomY}px`;
}

setInterval(moveGhost, 2000);

function moveBat() {
    const { randomX, randomY } = randomPosition(bat);
    bat.style.left = `${randomX}px`;
    bat.style.top = `${randomY}px`;
}

setInterval(moveBat, 4000);

function movePumpkin() {
    const { randomX, randomY } = randomPosition(pumpkin);
    pumpkin.style.left = `${randomX}px`;
    pumpkin.style.bottom = `${randomY}px`;
}

setInterval(movePumpkin, 3000);
