import Filter from '../lib';

export const filterBrannan = (imgData: ImageData) => {
    // sepia(.4)
    Filter.sepia(imgData, {
        amount: .4
    });
    // contrast(1.25)
    Filter.contrast(imgData, {
        amount: 1.25
    });
    // brightness(1.1)
    Filter.brightness(imgData, {
        amount: 1.1
    });
    // hue-rotate(-2deg)
    Filter.hueRotate(imgData, {
        amount: -.02
    });
    return imgData;
}