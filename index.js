const boxes = [
    { id: 1, name: 'red', background: 'red', color: 'white' },
    { id: 2, name: 'orange', background: 'orange', color: 'black' },
    { id: 3, name: 'yellow', background: 'yellow', color: 'black' },
    { id: 4, name: 'green', background: 'green', color: 'white' },
    { id: 5, name: 'blue', background: 'blue', color: 'white' },
    { id: 6, name: 'indigo', background: 'indigo', color: 'white' },
    { id: 7, name: 'violet', background: 'violet', color: 'black' },
];

const boxContainer = $('#box-container');

function renderBoxes() {
    for(let box of boxes) {
        const boxHtml = createBox(box);
        boxContainer.append(boxHtml);
        paintBox(box);
    }
}

function createBox(box) {
    return `<div class="box" id="${box.id}">${box.name}</div>`;
}

function paintBox(box) {
    let boxDiv = $(`#${box.id}`);
    boxDiv.css('background-color', box.background);
    boxDiv.css('color', box.color);
}

renderBoxes();
