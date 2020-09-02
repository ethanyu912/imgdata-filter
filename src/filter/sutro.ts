import Filter from '../lib';

export const filterSutro = (
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
    gradient.addColorStop(.5, 'transparent');
    gradient.addColorStop(1, 'rgba(0, 0, 0, .5)');

    context.globalCompositeOperation = 'darken';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .4
    });
    Filter.contrast(imgData, {
        amount: 1.2
    })
    Filter.brightness(imgData, {
        amount: .9
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