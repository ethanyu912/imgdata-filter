import Filter from '../lib';

export const filterBrannan = (
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    Filter.sepia(imgData, {
        amount: .4
    });
    Filter.contrast(imgData, {
        amount: 1.25
    });
    Filter.brightness(imgData, {
        amount: 1.1
    });
    Filter.hueRotate(imgData, {
        amount: -.02
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}