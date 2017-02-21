const datas = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 0; i < datas.length - 1; i++) {
    let j = 0;
    for (j = i + 1; j < datas.length; j++) {
        if (datas[i] == datas[j]) {
            datas.splice(j, 1);
            j--;
        }
    }
}

datas.sort(function (a, b) {
    return b - a;
});