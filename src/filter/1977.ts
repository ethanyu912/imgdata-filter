import Filter from '../lib';

export const filter1977 = (imgData: ImageData) => {
    //sepia(.5)
    Filter.sepia(imgData, {
        amount: 0.5
    });
    //hue-rotate(-30deg)
    Filter.hueRotate(imgData, {
        amount: -.3
    });
    //saturate(1.4)
    Filter.saturate(imgData, {
        amount: 1.4
    });
    return imgData;
}