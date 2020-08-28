import {
    filter1977,
    filterAden,
    filterAmaro,
    filterAshby,
    filterBrannan,
    filterBrooklyn,
    filterCharmes,
    filterClarendon,
    filterCrema,
    filterDogpatch,
    filterEarlybird,
    filterGingham,
    filterGinza,
    filterHefe,
    filterHelena,
    filterHudson,
    filterInkwell,
    filterKelvin,
    filterJuno,
    filterLark,
    filterLofi,
    filterLudwig
} from '../index';

const origin = document.getElementById('image-origin');
const img = new Image();

window.onload = () => {
    img.addEventListener('load', imgOnload, false);
    img.src = './image/instagram.jpg';
    // img.src = './image/instagram_bak.jpg';
    origin.src = img.src;
}

function imgOnload() {
    drawFiler('1977');
    drawFiler('aden');
    drawFiler('amaro');
    drawFiler('ashby');
    drawFiler('brannan');
    drawFiler('brooklyn');
    drawFiler('charmes');
    drawFiler('clarendon');
    drawFiler('crema');
    drawFiler('dogpatch');
    drawFiler('earlybird');
    drawFiler('gingham');
    drawFiler('ginza');
    drawFiler('hefe');
    drawFiler('helena');
    drawFiler('hudson');
    drawFiler('inkwell');
    drawFiler('kelvin');
    drawFiler('juno');
    drawFiler('lark');
    drawFiler('lofi');
    drawFiler('ludwig');
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
            filter1977(context, imgData);
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
            filterBrannan(context, imgData);
            break;
        case 'brooklyn':
            filterBrooklyn(canvas, context, imgData);
            break;
        case 'charmes':
            filterCharmes(canvas, context, imgData);
            break;
        case 'clarendon':
            filterClarendon(canvas, context, imgData);
            break;
        case 'crema':
            filterCrema(canvas, context, imgData);
            break;
        case 'dogpatch':
            filterDogpatch(context, imgData);
            break;
        case 'earlybird':
            filterEarlybird(canvas, context, imgData);
            break;
        case 'gingham':
            filterGingham(canvas, context, imgData);
            break;
        case 'ginza':
            filterGinza(canvas, context, imgData);
            break;
        case 'hefe':
            filterHefe(canvas, context, imgData);
            break;
        case 'helena':
            filterHelena(canvas, context, imgData);
            break;
        case 'hudson':
            filterHudson(canvas, context, imgData);
            break;
        case 'inkwell':
            filterInkwell(context, imgData);
            break;
        case 'kelvin':
            filterKelvin(canvas, context, imgData);
            break;
        case 'juno':
            filterJuno(canvas, context, imgData);
            break;
        case 'lark':
            filterLark(context, imgData);
            break;
        case 'lofi':
            filterLofi(context, imgData);
            break;
        case 'ludwig':
            filterLudwig(canvas, context, imgData);
            break;
        default:
            break;
    }
}