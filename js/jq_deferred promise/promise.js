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