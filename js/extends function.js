//parent class
function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function () {
        console.log(this.name + 　'睡了');
    }
}

Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food);
}

/**
 * 1. 原型链继承
 *  缺点: 1. 为子类添加属性和方法只能在实例化子类(new Animal)之后执行，不能放到构造器中
 *        2. 无法多继承
 *        3. 原型对象的引用属性所有实例共享
 *        4. 创建子类实例时，无法向父类构造器传参
 */

function Cat() {

}

Cat.prototype = new Animal('cat');
let cat = new Cat();

/**
 * 2. 构造继承
 *  特点: 1. 解决子类实例共享父类引用属性
 *        2. 创建子类时可以向父类传参
 *        3. 实现多继承
 *  缺点: 1. 实例仅仅是子类的实例而非父类的实例
 *        2. 只能继承父类的实例属性方法，无法继承原型属性和方法
 *        3. 无法实现函数复用, 每个子类都有父类实例函数的副本，影响性能
 */

function Cat(name) {
    Animal.call(this);
    this.name = name || 'tom';
}

let cat = new Cat('cat');

/**
 * 3. 实例继承
 * 缺点: 1. 父类实例而非子类实例
 *       2. 无法多继承 
 */

function Cat(name) {
    let instance = new Animal();
    this.name = name || 'tom';

    return instance;
}

/**
 * 4. 拷贝继承
 * 特点: 支持多继承
 * 缺点: 1. 无法获取父类不可枚举的方法
 *       2. 效率低，内存占用高
 * 
 */

function Cat(name) {
    let animal = new Animal();
    for (let p in animal) {
        Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'tom';
}

let cat = new Cat('cat');
console.log(cat.name);
console.log(cat.sleep());
console.log(cat.eat('fishes'));

/**
 * 5. 组合继承
 * 特点: 1. 同时继承实例属性方法和原型方法
 *       2. 既是子类实例，又是父类实例
 *       3. 不存在引用属性公用问题
 *       4. 函数可复用
 * 缺点: 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
 */

function Cat(name) {
    Animal.call(this, name);
    this.name = name || 'tom cat';
}

Cat.prototype = new Animal();

let cat = new Cat('mouse cat');

console.log(cat.name);
console.log(cat.sleep());
console.log(cat.eat('fishes'));

/**
 * 6. 寄生组合继承
 */

function Cat(name) {
    Animal.call(this, name);
    this.name = name || 'tom';
}

(function () {
    let Super = function () {}
    Super.prototype = new Animal();
    Cat.prototype = new Super();
})();

let cat = new Cat('mouse cat');

console.log(cat.name);
console.log(cat.sleep());
console.log(cat.eat('fishes'));