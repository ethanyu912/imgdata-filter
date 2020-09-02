import Filter from '../lib';

export const filterMayfair = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) => {
    const gradient = context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.25
    );
    gradient.addColorStop(0, 'rgba(175, 105, 24, 0)');
    gradient.addColorStop(1, 'rgba(175, 105, 24, .4)');

    context.globalCompositeOperation = 'multiply';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.contrast(imgData, {
        amount: 1.1
    });
    Filter.brightness(imgData, {
        amount: 1.15
    });
    Filter.saturate(imgData, {
        amount: 1.1
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}