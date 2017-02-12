//不可变数组快速范围求和
//需考虑的问题  1.数组过大  2.sumRange(i, j)范围求和函数使用频繁
//解决方案 将sumRange(i, j) =>  sumRange(0, j) - sumRange(0, i-1),用一维数组将num[0]到num[num.length - 1]的和存储起来
const UniqueID = Sup => class extends Sup {
    constructor(...args) {
        super(...args);
        Object.defineProperty(this, 'id', {
            value: Symbol(),
            writable: false,
            enumerable: false
        });
    }
}

const Immutable = Sup => class extends Sup{
    constructor(...args){
        super(...args);
        Object.freeze(this);
    }
}

const NumberArray = (function() {
    let sumTable = [];
    return class extends Immutable(UniqueID(Array)) {
        sumRange(i, j) {
            if(!sumTable[this.id]) {
                let table = [0], sum = 0;
                for(let i = 0; i < this.length; i++) {
                    sum += this[i];
                    table.push(sum);
                }
                sumTable[this.id] = table;
            }
            let table = sumTable[this.id];
            return table[j + 1] - table[i];
        }
    }
})();

new NumberArray(1,2,3,4,5,6,7,8,-1,-4,-5).sumRange(0,3);

