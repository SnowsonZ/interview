(function () {
    function deepCopy(obj) {
        let result = {};
        for (let index in obj) {
            if (typeof obj[index] === 'object') {
                result[index] = deepCopy(obj[index]);
            } else {
                result[index] = obj[index];
            }
        }

        return result;
    }

    let src = {
        one: {
            test: 1,
            tree: 2
        },
        two: 2,
        three: 3
    };
    let copySrc = deepCopy(src);

    console.log(src);
    console.log(copySrc);
})();