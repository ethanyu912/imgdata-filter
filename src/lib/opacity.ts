export default opacity;

function opacity(imagedata: ImageData, opts: amount = { amount: 0 }) {
    let i = 0;
    let data = imagedata.data;
    let len = data.length;
    let amount = +opts.amount || 0;
    let a;

    let tableValues = [0, +amount];

    for (; i < len; i += 4) {
        a = getInterpolation(data[i + 3] / 255, tableValues);
        data[i + 3] = a * 255;
    }
    return imagedata;
}

function getInterpolation(c: number, tableValues: number[]) {
    if (c === 1) {
        return tableValues[1];
    }

    return tableValues[0] + c * (tableValues[1] - tableValues[0]);
}