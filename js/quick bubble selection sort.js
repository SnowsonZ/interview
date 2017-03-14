//快速排序
function quickSort(array) {

    function sort(start, end) {

        let unique = start;  //关键字的位置,默认从数组的第一个元素起, i -> j, 从左到右
        let flag = array[unique]; //关键字   
        let back = end - 1;   //  j -> i    从右到左
        if(end - start > 1) {
            while(unique < back) {
                for(; unique < back; back--) {
                    if(array[back] < flag) {
                        array[unique++] = array[back];
                        break;
                    }
                }

                for(; unique < back; unique++) {
                    if(array[unique] > flag) {
                        array[back--] = array[unique];
                        break;
                    }
                }
            }
            array[unique] = flag;
            sort(0, unique);
            sort(unique + 1, end);
        }
    }
    sort(0, array.length);
    return array;
}

//冒泡排序

function bubbleSort(array) {
    if (array <= 1) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                //不借助第三个变量交换两个变量的值
                array[j] = array[j] - array[j + 1];
                array[j + 1] = array[j + 1] + array[j];
                array[j] = array[j + 1] - array[j];
            }
        }
    }
    return array;
}

//选择法排序
function selectionSort(array) {

    if (array.length <= 1) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        let maxIndex = 0;
        for (let j = 0; j < array.length - i; j++) {
            if (array[maxIndex] < array[j]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== array.length - 1 - i) {
            array[maxIndex] = array[maxIndex] - array[array.length - 1 - i];
            array[array.length - 1 - i] = array[array.length - 1 - i] + array[maxIndex];
            array[maxIndex] = array[array.length - 1 - i] - array[maxIndex];
        }
    }

    return array;
}

let array = [2, 43, 4, 12, 76, 43, 9, 1, 25, 67, 53, 7];

console.log(quickSort(array));
console.log(bubbleSort(array));
console.log(selectionSort(array));