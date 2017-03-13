//快速排序
function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }

    //设置参考值
    let key = array[0];
    let leftArray = [];
    let rightArray = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > key) {
            rightArray.push(array[i]);
        } else {
            leftArray.push(array[i]);
        }
    }

    return [].concat(quickSort(leftArray), key, quickSort(rightArray));
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

let array = [8, 4, 10, 30, 9, 3, 1, 5, 3];

console.log(quickSort(array));
console.log(bubbleSort(array));
console.log(selectionSort(array));