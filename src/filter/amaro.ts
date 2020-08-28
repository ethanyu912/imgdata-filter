import Filter from '../lib';

export const filterAmaro = (canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData) => {
    // sepia(.35)
    Filter.sepia(imgData, {
        amount: .35
    });
    // contrast(1.1)
    Filter.contrast(imgData, {
        amount: 1.1
    });
    // brightness(1.2)
    Filter.brightness(imgData, {
        amount: 1.2
    });
    // saturate(1.3)
    Filter.saturate(imgData, {
        amount: 1.3
    });
    // context.clearRect(0, 0, canvas.width, canvas.height);
    let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    // mix-blend-mode: overlay
    context.globalCompositeOperation = 'overlay';
    // background: rgba(125, 105, 24, .2)
    gradient.addColorStop(0, 'rgba(125, 105, 24, .2)');
    context.fillStyle = gradient;
    // put image before fillRect
    context.putImageData(imgData, 0, 0);
    context.fillRect(0, 0, canvas.width, canvas.height);
    return imgData;
}