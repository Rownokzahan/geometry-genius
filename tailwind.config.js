
function generateRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = randomColor();
});

document.querySelector('circle').addEventListener('mouseover', event => {
    event.target.style.fill = randomColor();
});
