let letter = document.querySelectorAll('h2 span');
letter.forEach(e => {
    e.style.color = `rgb(${Math.floor(280 * Math.random())}, ${Math.floor(280 * Math.random())}, ${Math.floor(280 * Math.random())})`;
});

setTimeout(() => {
    $('section').fireworks();
}, 10000);