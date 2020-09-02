
import Filter from '../lib';

export const filterLofi = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.saturate(imgData, {
        amount: 1.1
    });
    Filter.contrast(imgData, {
        amount: 1.5
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}