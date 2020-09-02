import Filter from '../lib';

export const filterKelvin = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const gradient = context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.25
    );
    gradient.addColorStop(0, 'rgba(149, 58, 0, .25)');
    gradient.addColorStop(1, 'rgba(149, 58, 0, .55)');

    context.globalCompositeOperation = 'overlay';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .15
    });
    Filter.contrast(imgData, {
        amount: 1.5
    });
    Filter.brightness(imgData, {
        amount: 1.1
    });
    Filter.hueRotate(imgData, {
        amount: -.1
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}