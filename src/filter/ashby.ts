import Filter from '../lib';

export const filterAshby = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    Filter.sepia(imgData, {
        amount: 0.5
    });
    Filter.contrast(imgData, {
        amount: 1.2
    });
    Filter.saturate(imgData, {
        amount: 1.8
    });

    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(125, 105, 24, .35)');
    // gradient.addColorStop(1, 'rgba(125, 105, 24, .35)');

    context.globalCompositeOperation = 'lighten';
    context.putImageData(imgData, 0, 0);
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    return imgData;
}