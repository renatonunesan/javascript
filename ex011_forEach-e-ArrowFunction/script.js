// ex001 and 002

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => {
    console.log(item.innerText);
});

// ex003

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

// ex005

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);
console.log(i);