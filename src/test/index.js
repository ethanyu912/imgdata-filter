import {
    filter1977,
    filterAden,
    filterAmaro,
    filterAshby,
    filterBrannan,
    filterBrooklyn,
} from '../index';

const origin = document.getElementById('image-origin');
const img = new Image();

window.onload = () => {
    img.addEventListener('load', imgOnload, false);
    img.src = './image/instagram.jpg';
    origin.src = img.src;
}

function imgOnload() {
    drawFiler('1977');
    drawFiler('aden');
    drawFiler('amaro');
    drawFiler('ashby');
    drawFiler('brannan');
    drawFiler('brooklyn');
}

function drawFiler(id) {
    const canvas = document.getElementById(id);
    canvas.width = origin.width;
    canvas.height = origin.height;

    let context = canvas.getContext('2d');
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

    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    switch (id) {
        case '1977':
            imgData = filter1977(imgData);
            context.putImageData(imgData, 0, 0);
            break;
        case 'aden':
            filterAden(canvas, context, imgData);
            break;
        case 'amaro':
            filterAmaro(canvas, context, imgData);
            break;
        case 'ashby':
            filterAshby(canvas, context, imgData);
            break;
        case 'brannan':
            imgData = filterBrannan(imgData);
            context.putImageData(imgData, 0, 0);
            break;
        case 'brooklyn':
            filterBrooklyn(canvas, context, imgData);
            break;
        case '1977':
            // imgData = filter1977(imgData);
            break;

        default:
            break;
    }
    // context.putImageData(imgData, 0, 0);
}