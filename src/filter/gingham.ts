import Filter from '../lib';

export const filterGingham = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    Filter.contrast(imgData, {
        amount: 1.1
    });
    Filter.brightness(imgData, {
        amount: 1.1
    });

    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgb(230, 230, 230)');

    context.globalCompositeOperation = 'soft-light';
    context.fillStyle = gradient;
    context.putImageData(imgData, 0, 0);
    context.fillRect(0, 0, canvas.width, canvas.height);

    return imgData;
}