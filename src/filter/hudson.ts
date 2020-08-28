import Filter from '../lib';

export const filterHudson = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    Filter.sepia(imgData, {
        amount: .25
    });
    Filter.contrast(imgData, {
        amount: 1.2
    });
    Filter.brightness(imgData, {
        amount: 1.2
    });
    Filter.saturate(imgData, {
        amount: 1.05
    });
    Filter.hueRotate(imgData, {
        amount: -.15
    });

    const gradient = context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
    );
    gradient.addColorStop(.25, 'rgba(25, 62, 167, 0)');
    gradient.addColorStop(1, 'rgba(25, 62, 167, .25)');

    context.globalCompositeOperation = 'multiply';
    context.putImageData(imgData, 0, 0);
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    return imgData;
}