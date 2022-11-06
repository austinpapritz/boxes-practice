const ul = document.querySelector('#ul');
const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn');

const playCont = document.getElementById('play-container');

let arrs = ['Bees', 'Birds', 'Deer'];
let playarrs = [];

let addLi = arrs.map((arr) => {
    let li = document.createElement('li');
    li.textContent = arr;
    return li;
});

ul.append(...addLi);

btnEl.addEventListener('click', function () {
    let playarrs = [];
    let value = inputEl.value;
    inputEl.value = '';
    playarrs.push(value);

    let addDiv = playarrs.map((playarr) => {
        let div = document.createElement('div');
        div.textContent = playarr;
        div.classList.add('play-btn');

        return div;
    });
    playCont.append(...addDiv);
});
