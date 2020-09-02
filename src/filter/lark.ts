
import Filter from '../lib';

export const filterLark = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .25
    });
    Filter.contrast(imgData, {
        amount: 1.2
    });
    Filter.brightness(imgData, {
        amount: 1.3
    });
    Filter.saturate(imgData, {
        amount: 1.25
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}