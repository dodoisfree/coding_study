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


// 2. Getter and setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age; // 콜스택 다차는 오류 방지 게터세터안 변수 이름변경
    }

    set age(value) {
        //if (value < 0) {
        //  throw Error('나이가 어떻게 -1이야');
        //}
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);