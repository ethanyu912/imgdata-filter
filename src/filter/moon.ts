import Filter from '../lib';

export const filterMoon = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.brightness(imgData, {
        amount: 1.4
    });
    Filter.contrast(imgData, {
        amount: .95
    });
    Filter.saturate(imgData, {
        amount: 0
    });
    Filter.sepia(imgData, {
        amount: .35
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}