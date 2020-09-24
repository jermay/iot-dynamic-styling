const boxes = [
    { name: 'red', color: 'red' },
    { name: 'orange', color: 'orange' },
    { name: 'yellow', color: 'yellow' },
    { name: 'green', color: 'green' },
    { name: 'blue', color: 'blue' },
    { name: 'indigo', color: 'indigo' },
    { name: 'violet', color: 'violet' },
];

const boxContainer = $('#box-container');

function renderBoxes() {
    let html = '';
    for(let box of boxes) {
        html += `<div class="box">${box.name}</div>`;
    }
    boxContainer.html(html);
}

renderBoxes();
