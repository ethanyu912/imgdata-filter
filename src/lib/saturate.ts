export default saturate;

function saturate(imagedata: ImageData, opts: amount = { amount: 0 }) {
    let i = 0;
    let data = imagedata.data;
    let len = data.length;
    let amount = +opts.amount || 0;
    let r, g, b;

    for (; i < len; i += 4) {
        r = (.213 + .787 * amount) * data[i]
            + (.715 - .715 * amount) * data[i + 1]
            + (.072 - .072 * amount) * data[i + 2];
        g = (.213 - .213 * amount) * data[i]
            + (.715 + .285 * amount) * data[i + 1]
            + (.072 - .072 * amount) * data[i + 2];
        b = (.213 - .213 * amount) * data[i]
            + (.715 - .715 * amount) * data[i + 1]
            + (.072 + .928 * amount) * data[i + 2];

        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
    }
    return imagedata;
}
