
/**
 * 原始类型
 * 内建类型
 * 原始包装类型
 */

(function () {

    //原始类型
    let bool = true;
    let one = 'one';
    let unde = undefined;
    let nu = null;
    let number = 1234;

    //内建类型
    let array = new Array();
    /*
        字面类型
        var array = [];
    */
    let func = function () {};
    let date = new Date();
    let error = new Error();
    let funcObject = new Function();
    /*
        字面形式
        function func(){}
    */
    let test = new Object();
    /*
        字面类型
        var obj = {};
    */
    let pattern = new RegExp();
    /*
        字面类型
        var pattern = /\d+/g;
    */

    //原始包装类型
    let num = new Number();
    let str = new String();
    let boo = new Boolean();


    console.log(typeof bool);
    console.log(typeof one);
    console.log(typeof unde);
    console.log(typeof nu);
    console.log(typeof number);
    console.log(typeof array);
    console.log(typeof test);
    console.log(typeof func);
    console.log(typeof funcObject);
    console.log(typeof pattern);
    console.log(typeof date);
    console.log(typeof error);
    console.log(typeof num);
})();