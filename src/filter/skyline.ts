import Filter from '../lib';

export const filterSkyline = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) => {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .15
    });
    Filter.contrast(imgData, {
        amount: 1.25
    })
    Filter.brightness(imgData, {
        amount: 1.25
    });
    Filter.saturate(imgData, {
        amount: 1.2
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}