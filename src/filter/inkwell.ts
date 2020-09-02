
import Filter from '../lib';

export const filterInkwell = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.brightness(imgData, {
        amount: 1.25
    });
    Filter.contrast(imgData, {
        amount: .85
    });
    Filter.grayscale(imgData, {
        amount: 1
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}