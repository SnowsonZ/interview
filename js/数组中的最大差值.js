function maxProfil(array) {

    let max = array.reduce(function(pre, cur) {
        return Math.max(pre, cur);
    });

    let min = array.reduce(function(pre, cur) {
        return Math.min(pre, cur);
    });



    return max - min;
}

console.log(maxProfil([51, 20, 30, 40]));