export default grayscale;

function grayscale(imagedata: ImageData, opts = { amount: 0 }) {
    let i = 0;
    let data = imagedata.data;
    let len = data.length;
    let amount = +opts.amount || 0;
    let compleAmount = 1 - amount;
    let r, g, b;
    for (; i < len; i += 4) {
        r = (0.2126 + 0.7874 * compleAmount) * data[i]
            + (0.7152 - 0.7152 * compleAmount) * data[i + 1]
            + (0.0722 - 0.0722 * compleAmount) * data[i + 2];
        g = (0.2126 - 0.2126 * compleAmount) * data[i]
            + (0.7152 + 0.2848 * compleAmount) * data[i + 1]
            + (0.0722 - 0.0722 * compleAmount) * data[i + 2];
        b = (0.2126 - 0.2126 * compleAmount) * data[i]
            + (0.7152 - 0.7152 * compleAmount) * data[i + 1]
            + (0.0722 + 0.9278 * compleAmount) * data[i + 2];
        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
    }

    return imagedata;
}
