const boxes = [
    { name: 'red', background: 'red', color: 'white' },
    { name: 'orange', background: 'orange', color: 'black' },
    { name: 'yellow', background: 'yellow', color: 'black' },
    { name: 'green', background: 'green', color: 'white' },
    { name: 'blue', background: 'blue', color: 'white' },
    { name: 'indigo', background: 'indigo', color: 'white' },
    { name: 'violet', background: 'violet', color: 'black' },
];

const boxContainer = $('#box-container');

function renderBoxes() {
    let html = '';
    for(let box of boxes) {
        // inline style
        html += `<div class="box" style="background-color: ${box.background}; color: ${box.color};">${box.name}</div>`;
    }
    boxContainer.html(html);
}

renderBoxes();
