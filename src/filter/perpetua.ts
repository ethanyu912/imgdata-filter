import Filter from '../lib';

export const filterPerpetua = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) => {
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 91, 154, .25)');
    gradient.addColorStop(1, 'rgba(230, 193, 61, .25)');

    context.globalCompositeOperation = 'multiply';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.contrast(imgData, {
        amount: 1.1
    })
    Filter.brightness(imgData, {
        amount: 1.25
    });
    Filter.saturate(imgData, {
        amount: 1.1
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}