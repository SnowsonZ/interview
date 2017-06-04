//二分搜索  （array有序数组）
function binarySearch(array, left, right, t) {

    while (left <= right) {
        let mid = (left + right) >> 1;
        if (array[mid] > t) {
            right = mid - 1;
        } else if (array[mid] < t) {
            left = mid + 1;
        } else {
            return mid;
        }


    }
    return -1;
}

let array = [2, 4, 6, 8, 10, 14, 20, 32];
console.log(binarySearch(array, 0, array.length - 1, 20));