import Filter from '../lib';

export const filterXPro = (
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
    gradient.addColorStop(0, 'rgba(0, 91, 154, .35)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, .65)');

    context.globalCompositeOperation = 'multiply';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .45
    });
    Filter.contrast(imgData, {
        amount: 1.25
    })
    Filter.brightness(imgData, {
        amount: 1.75
    });
    Filter.saturate(imgData, {
        amount: 1.3
    });
    Filter.hueRotate(imgData, {
        amount: -.05
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}