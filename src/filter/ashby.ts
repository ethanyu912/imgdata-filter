import Filter from '../lib';

export const filterAshby = (canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData) => {
    // sepia(.5)
    Filter.sepia(imgData, {
        amount: 0.5
    });
    // contrast(1.2)
    Filter.contrast(imgData, {
        amount: 1.2
    });
    //saturate(1.8)
    Filter.saturate(imgData, {
        amount: 1.8
    });
    // clear context
    context.clearRect(0, 0, canvas.width, canvas.height);
    let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    // mix-blend-mode: overlay
    context.globalCompositeOperation = 'lighten';
    // background: rgba(125, 105, 24, .35)
    gradient.addColorStop(0, 'rgba(125, 105, 24, .35)');
    gradient.addColorStop(1, 'rgba(125, 105, 24, .35)');
    context.fillStyle = gradient;
    // put image before fillRect
    context.putImageData(imgData, 0, 0);
    context.fillRect(0, 0, canvas.width, canvas.height);
    return imgData;
}