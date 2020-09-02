import Filter from '../lib';

export const filterStinson = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(1, 'rgba(125, 105, 24, .45)');

    context.globalCompositeOperation = 'lighten';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .35
    })
    Filter.contrast(imgData, {
        amount: 1.25
    })
    Filter.brightness(imgData, {
        amount: 1.1
    });
    Filter.saturate(imgData, {
        amount: 1.25
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}