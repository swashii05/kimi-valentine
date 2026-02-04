const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
    // Moves the button to a random position
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = "<h1>Yay! See you on the 14th! ❤️</h1>";
});