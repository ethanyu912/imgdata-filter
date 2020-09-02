import Filter from '../lib';

export const filterHefe = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const gradient = context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, .25)');

    context.globalCompositeOperation = 'multiply';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .4
    });
    Filter.contrast(imgData, {
        amount: 1.4
    });
    Filter.brightness(imgData, {
        amount: 1.2
    });
    Filter.saturate(imgData, {
        amount: 1.4
    });
    Filter.hueRotate(imgData, {
        amount: -.1
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}