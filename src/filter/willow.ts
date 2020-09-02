import Filter from '../lib';

export const filterWillow = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) => {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.brightness(imgData, {
        amount: 1.2
    });
    Filter.contrast(imgData, {
        amount: .85
    })
    Filter.saturate(imgData, {
        amount: .05
    });
    Filter.sepia(imgData, {
        amount: .2
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}