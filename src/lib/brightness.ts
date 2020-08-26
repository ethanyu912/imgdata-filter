export default brightness;

function brightness(imagedata: ImageData, opts = { amount: 0 }) {
    let i = 0;
    let data = imagedata.data;
    let len = data.length;
    let amount = +opts.amount || 0;
    let r, g, b, a;

    for (; i < len; i += 4) {
        r = data[i] * amount;
        g = data[i + 1] * amount;
        b = data[i + 2] * amount;

        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
    }
    return imagedata;
}