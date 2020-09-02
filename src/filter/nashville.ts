import Filter from '../lib';

export const filterNashville = (
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
    gradient.addColorStop(0, 'rgba(128, 78, 15, .5)');
    gradient.addColorStop(1, 'rgba(128, 78, 15, .65)');

    context.globalCompositeOperation = 'screen';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .25
    });
    Filter.contrast(imgData, {
        amount: 1.5
    })
    Filter.brightness(imgData, {
        amount: .9
    });
    Filter.hueRotate(imgData, {
        amount: -.15
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}