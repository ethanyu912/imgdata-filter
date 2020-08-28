// // Hefe Filter
// .filter - hefe {
//     filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue - rotate(-10deg);

//   &:: before {
//         background: radial - gradient(circle closest - corner, transparent 0, rgba(0, 0, 0, .25) 100 %);
//         content: "";
//         mix - blend - mode: multiply;
//     }
// }
import Filter from '../lib';

export const filterHefe = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgData: ImageData
) => {
    Filter.sepia(imgData, {
        amount: .4
    });
    Filter.contrast(imgData, {
        amount: 1.4
    });
    Filter.brightness(imgData, {
        amount: 1.2
    });
    Filter.saturate(imgData, {
        amount: 1.4
    });
    Filter.hueRotate(imgData, {
        amount: -.1
    });

    const gradient = context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, .25)');

    context.globalCompositeOperation = 'multiply';
    context.putImageData(imgData, 0, 0);
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    return imgData;
}