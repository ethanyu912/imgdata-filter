import Filter from '../lib';

export const filterReyes = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .75
    });
    Filter.contrast(imgData, {
        amount: .75
    });
    Filter.brightness(imgData, {
        amount: 1.25
    });
    Filter.saturate(imgData, {
        amount: 1.4
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}