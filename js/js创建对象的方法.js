/**
 * 1. 工厂方式
 *
 */

let lev = function () {
    return this.name;
}

function Parent(name, age, height) {
    let child = new Object();
    child.name = name;
    child.age = age;
    child.height = height;
    child.lev = lev;
    return child;
}

/**
 * 2. 构造函数方式
 */

let lev = function () {
    return this.name;
}

function Parent(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.lev = lev;
}

/**
 * 3. 原型模式
 */

let lev = function () {
    return this.name;
}

function Parent() {

}

Parent.prototype.name = '';
Parent.prototype.age = 123;
Parent.prototype.height = 180;
Parent.prototype.lev = lev;

/**
 * 4. 混合构造函数原型模式
 */

function Parent(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

Parent.prototype.lev = function () {
    return this.name;
};

/**
 * 5. 动态原型模式
 */

function Parent(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;

    if (typeof Parent.lev == "undefined") {
        Parent.prototype.lev = function () {
            return this.name;
        }
        Parent.lev = true;
    }
}