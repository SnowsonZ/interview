var dtd = $.Deferred();
var wait = function (dtd) {
    var task = function () {
        console.log('执行完毕');
        dtd.resolve('complete!!!');
    }

    window.setTimeout(task, 2000);
    return dtd.promise();
}

$.Deferred(wait).done(function (data) {
    console.log(data);
});
// $.when(wait(dtd)).then(function(data){
//     console.log('success!');
// },function(){
//     console.log('fair');
// })

// console.log(defrred);
// var promise = $.ajax('http://www.reddit.com/r/reactjs.json');
// promise.then(function (data) {
//     return data;
// }).then(function(data) {
//     console.log(data);
// })