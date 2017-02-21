//在函数调用时，caller指向函数调用者，arguments.callee指向被调用的函数本身
(function () {
    function test1(a, b) {
        console.log(test1.caller);
        console.log(arguments.callee);
        alert(a - b);
    }

    function test2(a, b) {
        test1(a, b);
    }
    test2(3, 2);
})();