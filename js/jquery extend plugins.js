(function () {
    // *** jquery扩展方法
    //添加静态方法
    $.extend({
        test() {
            console.log('jquery extend');
        }
    });
    //添加实例方法
    // 1
    $.fn.extend({
        instance(message) {
            console.log(message);
        }
    });

    // 2
    $.fn.instancetwo = function (message) {
        console.log(message);
    }

    $(this).instancetwo('instancetwo function');
    $.test();
    $(this).instance('instance function');

    //*** 自定义jquery插件
    (function ($) {
        //定义默认值
        let defaults = {
            prevId: 'prevBtn',
            prevText: 'Previous',
            nextId: 'nextBtn',
            nextText: 'next'
        };
        //扩展的方法名
        $.fn.easySlider = function (options) {
            //覆盖默认值
            var options = $.extend(defaults, options);

            //支持jquery selector，并支持链式调用
            return this.each(function () {

            });
        }

    })(jquery);
})();