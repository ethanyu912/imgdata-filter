import Filter from '../lib';

export const filter1977 = (imgData: ImageData) => {
    // filter: sepia(.5) hue - rotate(-30deg) saturate(1.4);
    Filter.sepia(imgData, {
        amount: 0.5
    });
    Filter.hueRotate(imgData, {
        amount: -30
    });
    Filter.saturate(imgData, {
        amount: 1.4
    });
    return imgData;
}