import Filter from '../lib';

export const filterCharmes = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(125, 105, 24, .2)');

    context.globalCompositeOperation = 'darken';
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
        amount: 1.25
    });
    Filter.saturate(imgData, {
        amount: 1.35
    });
    Filter.hueRotate(imgData, {
        amount: -.05
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}