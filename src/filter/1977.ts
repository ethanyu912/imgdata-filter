import Filter from '../lib';

// filter: sepia(.5) hue - rotate(-30deg) saturate(1.4);
export const filter1977 = (imgData: ImageData) => {
    Filter.sepia(imgData, {
        amount: 0.5
    });
    Filter.hueRotate(imgData, {
        amount: '-30deg'
    });
    Filter.saturate(imgData, {
        amount: 1.4
    });
    return imgData;
}