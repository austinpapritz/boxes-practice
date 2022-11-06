const ul = document.querySelector('#ul');
const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn');

let arrs = ['Bees', 'Birds', 'Deer'];

let nodes = arrs.map((arr) => {
    let li = document.createElement('li');
    li.textContent = arr;
    return li;
});

ul.append(...nodes);
