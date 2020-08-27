//         background: rgba(125, 105, 24, .1);
//         mix - blend - mode: multiply;
import Filter from '../lib';

export const filterAden = (canvas: HTMLCanvasElement
    , context: CanvasRenderingContext2D
    , imgData: ImageData) => {
    // sepia(.2)
    Filter.sepia(imgData, {
        amount: 0.2
    });
    // brightness(1.15)
    Filter.brightness(imgData, {
        amount: 1.15
    });
    // saturate(1.4)
    Filter.saturate(imgData, {
        amount: 1.4
    });
    // clear context
    context.clearRect(0, 0, canvas.width, canvas.height);
    let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'multiply';
    gradient.addColorStop(0, 'rgba(125, 105, 24, .1)');
    gradient.addColorStop(1, 'rgba(125, 105, 24, .1)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return imgData;
}