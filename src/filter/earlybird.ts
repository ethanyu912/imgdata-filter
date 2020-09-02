import Filter from '../lib';

export const filterEarlybird = (
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
    gradient.addColorStop(0, 'rgba(125, 105, 24, 0)');
    gradient.addColorStop(1, 'rgba(125, 105, 24, .15)');

    context.globalCompositeOperation = 'multiply';
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
        amount: 1.15
    });
    Filter.saturate(imgData, {
        amount: .9
    });
    Filter.hueRotate(imgData, {
        amount: -.05
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}