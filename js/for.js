/*
    数组和对象的遍历
*/

(function () {
    // 1 for   do while
    //     let i = 0;
    let array = ['one', 'two', 'three'];
    let object = { one: 'first', two: 'second', three: 'third' };
    do {
        console.log(i++);
    } while (i < 10);

    //2 forEach  只能在firefox和chrome；只能遍历数组；不能使用break,continue，使用return结束本次循环
    array.forEach(function (item, index, array) {
        if (item === 'one') {
            return;
        }
        console.log(index);
    });
    //3 for in 支持数组和对象的遍历,遍历的内容为array的index或者对象的key
    for (let index in array) {

        console.log(array[index]);
    }

    for (let key in object) {
        console.log(object[key]);
    }

    //4 $.each  this执行当前遍历的元素即item  $.each $(selector).each  return true跳出本次循环  return false 跳出循环
    $.each(array, function (index, item) {
        console.log(index, item, this);
    });

    $.each(object, function (index, item) {
        console.log(index, item, this);
    })

    //    5 // $(selector).each();

    6 // map   只支持数组及类数组eg. string, nodelist
    let str = '123456';
    Array.prototype.map.call(str, function (content) {
        console.log(content);
    });
    console.log(Array.prototype.map.call(array, function (content) {
        return content;
    }));

    7 //every 只支持数组，检验每一项是否符合某一条件，
    console.log([2, 4, 10, 23, 9].every(elem => elem > 1));

})();

