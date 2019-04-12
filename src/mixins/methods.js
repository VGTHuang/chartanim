function rgbToString(rgb) {
    // rgbobj = { r: <val>, g: <val>, b: <val> } or { r: <val>, g: <val>, b: <val>, a: <val> }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]}${rgb[3]<1?','+rgb[3]:""})`;
}


export {rgbToString};