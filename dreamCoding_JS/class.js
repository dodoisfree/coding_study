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
console.log(user1.firstName);

// 3 필드 (public, private)
class Experiment {
    PublicFIeld = 2;
    #privateField = 0;  //# 붙이면 private필드 내부에서만 접근가능, 최근에 사용되기 시작해 아직 너무이르다.
}
const experiment = new Experiment();
console.log(experiment.PublicFIeld);
console.log(experiment.privateField);

// 4 Static properties and methods
// 오브젝트에 상관없이, 클래스 자체에서 받아오는 경우 static 사용 권장
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5 Inheritance 상속
// 클래스를 연장하는 방법
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}
// extends를 사용하면 클래스를 연장할 수 있다. 
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());