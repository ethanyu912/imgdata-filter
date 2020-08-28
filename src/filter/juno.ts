import Filter from '../lib';

export const filterJuno = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    Filter.sepia(imgData, {
        amount: .35
    });
    Filter.contrast(imgData, {
        amount: 1.15
    });
    Filter.brightness(imgData, {
        amount: 1.15
    });
    Filter.saturate(imgData, {
        amount: 1.8
    });

    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(127, 187, 227, .2)');

    context.globalCompositeOperation = 'overlay';
    context.putImageData(imgData, 0, 0);
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    return imgData;
}