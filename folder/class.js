// class: template
// object: instance of a class
// class는 비유하자면 붕어빵틀이고 object는 붕어빵에 해당한다.

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello!`);
    }
}
// 새로운 obj를 만들 때는 new 라는 키워드를 쓴다.
const dodo = new Person('dodo', 28);
console.log(dodo.name);
console.log(dodo.age);
dodo.speak();
console.log('test');