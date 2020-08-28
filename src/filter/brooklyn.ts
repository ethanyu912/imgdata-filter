import Filter from '../lib';

export const filterBrooklyn = (canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData) => {
    // sepia(.25)
    Filter.sepia(imgData, {
        amount: .25
    });
    // contrast(1.25)
    Filter.contrast(imgData, {
        amount: 1.25
    });
    // brightness(1.25)
    Filter.brightness(imgData, {
        amount: 1.25
    });
    // hue-rotate(5deg)
    Filter.hueRotate(imgData, {
        amount: .1
    });
    // clear context
    context.clearRect(0, 0, canvas.width, canvas.height);
    let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    // background: rgba(127, 187, 227, .2)
    gradient.addColorStop(0, 'rgba(127, 187, 227, 1)');
    gradient.addColorStop(1, 'rgba(127, 187, 227, .2)');
    // mix-blend-mode: overlay
    context.globalCompositeOperation = 'overlay';
    context.fillStyle = gradient;
    // put image before fillRect
    context.putImageData(imgData, 0, 0);
    context.fillRect(0, 0, canvas.width, canvas.height);
    return imgData;
}