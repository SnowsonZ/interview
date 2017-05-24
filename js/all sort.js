效率：冒泡排序 ≈ 交换排序 ≈选择排序 < 插入排序 <Shell排序 <堆排序 < 归并排序 <快速排序
//快速排序
function quickSort(array) {

    function sort(start, end) {

        let unique = start; //关键字的位置,默认从数组的第一个元素起, i -> j, 从左到右
        let flag = array[unique]; //关键字   
        let back = end - 1; //  j -> i    从右到左
        if (end - start > 1) {
            while (unique < back) {
                for (; unique < back; back--) {
                    if (array[back] < flag) {
                        array[unique++] = array[back];
                        break;
                    }
                }

                for (; unique < back; unique++) {
                    if (array[unique] > flag) {
                        array[back--] = array[unique];
                        break;
                    }
                }
            }
            array[unique] = flag; //关键词至于截止位
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
        let maxIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[maxIndex] > array[j]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            array[maxIndex] = array[maxIndex] - array[i];
            array[i] = array[i] + array[maxIndex];
            array[maxIndex] = array[i] - array[maxIndex];
        }
    }

    return array;
}

//插入排序
function insertSort(array) {

    if (array.length <= 1) {
        return array;
    }

    for (let i = 1; i < array.length; i++) {
        let preIndex = i - 1;
        let current = array[i];
        while (preIndex >= 0 && array[preIndex] > current) {
            array[preIndex + 1] = array[preIndex];
            preIndex--;
        }
        array[preIndex + 1] = current;
    }

    return array;
}


//归并排序  
function mergeSort(arr) { // 采用自上而下的递归方法      
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

let array = [2, 43, 4, 12, 76, 43, 9, 1, 25, 67, 53, 7];
// let array = [2, 5, 0, 1, 7];

// console.log(quickSort(array));
// console.log(bubbleSort(array));
// console.log(selectionSort(array));
// console.log(insertSort(array));
console.log(mergeSort(array));