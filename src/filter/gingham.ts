import Filter from '../lib';

export const filterGingham = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgb(230, 230, 230)');

    context.globalCompositeOperation = 'soft-light';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.contrast(imgData, {
        amount: 1.1
    });
    Filter.brightness(imgData, {
        amount: 1.1
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}