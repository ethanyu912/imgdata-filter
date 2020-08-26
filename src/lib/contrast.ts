export default contrast;

function contrast(imagedata: ImageData, opts = { amount: 0 }) {
    let i = 0;
    let data = imagedata.data;
    let len = data.length;
    let amount = +opts.amount || 0;
    let r, g, b;
    let intercept = -(.5 * amount) + .5;

    for (; i < len; i += 4) {
        // r = data[i] * amount + intercept
        // g = data[i + 1] * amount + intercept
        // b = data[i + 2] * amount + intercept
        r = 128 + (data[i] - 128) * amount;
        g = 128 + (data[i + 1] - 128) * amount;
        b = 128 + (data[i + 2] - 128) * amount;

        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
    }
    return imagedata;
}
