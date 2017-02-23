function testPromise(successful, failure) {
    var promise = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve(successful);
            //reject(failure);
        }, 1000);
    });

    return promise;
}

testPromise('successful!!', 'failure').then(function (data) {
    console.log(data);
});

(function () {
    new Promise((resolve, reject) => {
        console.log('start');
        console.log('wait');
        setTimeout(function () {
            resolve('successful');
        }, 4000);
    }).then(function (result) {
        console.log(result);
    })
})();