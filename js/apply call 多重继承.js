var s1 = function (name) {
  this.name = name;
}

var s2 = function (sex) {
  this.sex = sex;
}

var s3 = function (age) {
  this.age = age;
}

var Student = function (name, sex, age, score) {
  s1.call(this, name);
  s2.call(this, sex);
  s3.call(this, age);
  this.score = score;
}

Student.prototype.construction = Student;
var s = new Student('jack', 'male', '12', '100');
console.log(s.name); //输出:jack
console.log(s.sex); //输出:male 
console.log(s.age); //输出:12
console.log(s.score); //输出:100