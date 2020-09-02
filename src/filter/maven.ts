import Filter from '../lib';

export const filterMaven = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(158, 175, 30, .25)');
    context.globalCompositeOperation = 'darken';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .35
    });
    Filter.contrast(imgData, {
        amount: 1.05
    });
    Filter.brightness(imgData, {
        amount: 1.05
    });
    Filter.saturate(imgData, {
        amount: 1.75
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}