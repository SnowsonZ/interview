/**
 * prototype.constructor 返回一个指向创建了该对象原型的函数引用
 * obj.__proto__.constructor === obj.constructor指向自身的构造函数
 * let test = new Test();   test.__proto === Test.prototype
 */
(function () {
    var test = function (message) {
        console.log(message);
    }

    var alert1 = function (message) {
        alert(message);
    }

    var obj = {
        width: 120,
        height: 180
    }

    var obj1 = {
        color: 1,
        boxsizing: 1
    }

    console.log(test.prototype.constructor('successful11'));
    test.prototype.constructor = alert1;
    console.log(test.prototype.constructor('fail!!'));

})();