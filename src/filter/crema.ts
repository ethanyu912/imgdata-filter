import Filter from '../lib';

export const filterCrema = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    Filter.sepia(imgData, {
        amount: .5
    });
    Filter.contrast(imgData, {
        amount: 1.25
    });
    Filter.brightness(imgData, {
        amount: 1.15
    });
    Filter.hueRotate(imgData, {
        amount: .02
    });

    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(125, 105, 24, .2)');
    context.globalCompositeOperation = 'multiply';
    context.fillStyle = gradient;
    // put image before fillRect
    context.putImageData(imgData, 0, 0);
    context.fillRect(0, 0, canvas.width, canvas.height);

    return imgData;
}