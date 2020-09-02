import Filter from '../lib';

export const filterBrooklyn = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(1, 'rgba(127, 187, 227, .2)');

    context.globalCompositeOperation = 'overlay';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .25
    });
    Filter.contrast(imgData, {
        amount: 1.25
    });
    Filter.brightness(imgData, {
        amount: 1.25
    });
    Filter.hueRotate(imgData, {
        amount: .1
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}