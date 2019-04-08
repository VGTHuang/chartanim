function rgbToString(rgbobj) {
    // rgbobj = { r: <val>, g: <val>, b: <val> } or { r: <val>, g: <val>, b: <val>, a: <val> }
    return `rgb(${rgbobj.r},${rgbobj.g},${rgbobj.b}${(rgbobj.a&&rgbobj.a!=1)?','+rgbobj.a:""})`;
}

function stringToRgb(str) {
    var res = new RegExp(/^rgb\(\)$/).exec(str);
}

export {rgbToString};