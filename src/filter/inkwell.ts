
import Filter from '../lib';

export const filterInkwell = (
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    console.log(context)
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