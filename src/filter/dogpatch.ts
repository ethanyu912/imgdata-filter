import Filter from '../lib';

export const filterDogpatch = (
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    Filter.sepia(imgData, {
        amount: .35
    });
    Filter.saturate(imgData, {
        amount: 1.1
    });
    Filter.contrast(imgData, {
        amount: 1.5
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}