//parent class
function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function() {

    }
}

Animal.prototype.eat = function(food) {
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