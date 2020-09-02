import * as filters from '../src/filter/index';

const origin = document.getElementById('image-origin');
const img = new Image();

window.onload = () => {
    img.addEventListener('load', imgOnload, false);
    img.src = './image/instagram.jpg';
    origin.src = img.src;
}

const imgOnload = () => {
    const canvasList = document.getElementsByTagName('canvas');
    for (const each of canvasList) {
        const id = each.getAttribute('id');
        drawFilter(id);
    }
}

const drawFilter = (id) => {
    const canvas = document.getElementById(id);
    canvas.width = origin.width;
    canvas.height = origin.height;

    const context = canvas.getContext('2d');
    context.drawImage(img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        canvas.width,
        canvas.height
    );

    let letters = id.split('-');
    letters = letters.map((each) =>
        each[0].toUpperCase() + each.slice(1)
    );

    const capitalized = letters.join('');
    const fnName = `filter${capitalized}`;
    filters[fnName](canvas, context);
}