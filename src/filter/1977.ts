import Filter from '../lib';

export const filter1977 = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: 0.5
    });
    Filter.hueRotate(imgData, {
        amount: -.3
    });
    Filter.saturate(imgData, {
        amount: 1.4
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}