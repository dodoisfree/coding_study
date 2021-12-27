// 1. STring concatenation
console.log('my' + ' cat'); // 문자 + 문자 = 문자 / my cat
console.log('1' + 2); // 문자 + 숫자 = 문자 / 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); //백틱에 $ 사용 시 문자 + 숫자 계산 = 문자 / string literals: 1 + 2 = 3

// 2. Numeric operators
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(1 % 1); // 나머지
console.log(1 ** 1); // 제곱

// 3. Increment, decrment operators
let counter = 2;

const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// counter = counter + 1    // 결과는 3
// preIncrement = counter;

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// counter = counter + 1;   // 결과는 4
// postIncrement = counter;

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
// counter = counter - 1    // 결과는 3
// preIncrement = counter;

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
// counter = counter - 1;   // 결과는 2
// postIncrement = counter;
// 앞에 붙이면 업데이트 후 할당, 뒤에 붙이면 할당 후 업데이트

// 4. Assigment operators
let x = 3;
let y = 6;
x += y; // x는 x + y;
x -= y; // x는 x - y;
x *= y; // x는 x * y;
x /= y; // x는 x / y;

// 5. 비교하는 operators
console.log(10 < 6); // 작거나
console.log(10 <= 6); // 작거나 같거나
console.log(10 > 6); // 크거나
console.log(10 >= 6); // 크거나 같거나

// 6. Logical operators: || (or 연산자), && (and 연산자), ! (not 연산자)
const value1 = false;
const value2 = 4 < 2;

// || (or 연산자), or 연산자는 순서중 하나라도 트루가 나오면 멈춤
// 되도록 헤비하거나 연산을 많이 하거나, 함수 등등을 제일 뒤에 배치하자.
console.log(`or: ${value1 || value2 || check()}`);

// && (and 연산자), 전부 트루여야 트루리턴 가능
// 처음이 거짓이면 뒤에 전부 실행 안됨, 이것도 헤비한건 뒤에 배치하자.
// and는 null 체크 할 때 많이 쓰인다.
console.log(`and: ${value1 && value2 && check()}`);

// ! (not 연산자) 값을 반대로 바꿔준다.
console.log(!value1); // false면 true로 바꿔줌.

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('OTL');
    }   
    return true;
}

// 7. Eqality, 코딩 시 strict equality 사용권장
const stringFive = '5';
const numberFive = 5;
// == loose equality, 타입이 달라도 변경해서 검사/ 문자5, 숫자5 둘다 같다.
console.log(stringFive == numberFive); //문자5, 숫자5 같다, 진실
console.log(stringFive != numberFive); //문자5, 숫자5 다르다, 거짓
// === strict equality, 타입이 다른지 신경써서 검사/ 문자5, 숫자5 둘다 다르다. 
console.log(stringFive === numberFive); //문자5, 숫자5 같다, 거짓
console.log(stringFive !== numberFive); //문자5, 숫자5 다르다, 진실

// object equality by reference
const dodo1 = { name: 'dodo'};
const dodo2 = { name: 'dodo'};
const dodo3 = dodo1;
console.log(dodo1 == dodo2); // f
console.log(dodo1 === dodo2); // f
console.log(dodo1 === dodo3); // t

// equality - 헷갈릴 수 있는 것
console.log(0 == false); // true
console.log(0 == false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'doto';
if (name === 'dodo') {
    console.log('welcome, dodo!');
} else if (name === 'doko') {
    console.log('You are dodo?');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// if를 간단하게 사용할 때
// 값 ? 트루면 1번, 아니면 2번 (예제 참고)
console.log(name === 'dodo' ? 'yes' : 'no'); //이름이 도도가 아니기에 no

// 10. Switch statement
// if 사용 시 너무 여러개를 반복할 경우 Switch를 사용해보는게 좋다.
// TS에서 타입 검사 시 사용하면 가독성이 좋다.
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('IE 싫어');
        break;
    case 'Chrome':
    case 'safari':
        console.log('좋지');
        break;
    case 'Wale':
        console.log('제일 편해');
        break;
}

// 11. Loops 
// while loop 조건문이 맞을 때만 블럭을 실행하고 싶다면 while
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop 블럭을 먼저 실행하고 싶다면 do while
do {
    console.log(`do while: ${i}`);
    i--;
}   while (i > 0); 

// for loop, for(시작 값; 조건; 단계)
// 조건, 단계만 반복하며 조건이 맞지 않을 때까지 반복
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
// 블럭안에 지역변수 선언해서 사용가능
for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}

// nested loops, for문안에 for문을 내포시킬 수 있으나, O(n의2승) 이런식이라 cpu에 좋지 않음.

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// 루프 안에서는 break, continue 같은 키워드로 루프를 끝낼 수 있다.
// break는 루프를 완전히 끝내는 것이고, continue는 스킵하고 다음 스텝으로 넘어가는 것.

// 퀴즈1. 숫자 0~10까지 짝수만 컨티뉴로 출력해보기
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`퀴즈1: ${i}`);
}

// 퀴즈2. 숫자 0~10까지 루핑하다 숫자 8에 멈추는 것 출력해보기
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`퀴즈2: ${i}`);
}

// 1. Function 
// 프로그램을 구성하는 굉장히 기본적인 빌딩 블럭이다, 서브 프로그램이라고도 불리며 여러번 재사용이 가능하다.
//한가지의 테스크나, 어떠한 값을 계산하기 위해 사용되고 있다.

// Function 사용법
// function 함수이름 (파라미터1, 파라미터2) { body...함수로직 작성 후 return; }
// 하나의 함수는 한가지의 일만 하도록 만들어야 한다.
// 함수이름은 무언가를 동작하는 것이기에 동사형태로 지정하는게 좋다.
// function 은 오브젝트이다.

function printHello() {
	console.log('hello');
}
printHello();

function log(message){
	console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive 파라미터들의 경우 메모리에 value가 저장이 되어있기에 value가 전달이되고,
// Object 파라미터들의 경우 메모리에 레퍼런스가 저장이 되기에 레퍼런스가 전달이 된다.

function changeName(obj) {
	obj.name = 'coder';
}
const dodos = { name: 'dodos'};
changeName(dodos);
console.log(dodos);

// 3. Default parameters (ES6에서 추가 됨)
// 사용자가 파라미터 값을 지정해 놓지 않았을 경우 디폴트로 지정해 놓은 unknown이 대체되어 사용된다.
function showMessage(message, from = 'unknown'){
	console.log(`${message} by ${from}`);
}
showMessage('Hi ! ');

// 4. Rest parameters (ES6에서 추가 됨)
// 아래 for문 두개와 forEach는 같다.
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
	
	for (const arg of args) {
		console.log(arg);
	}
	
	args.forEach((arg) => console.log(arg));
}
printAll('newbie', 'coder', 'dodo');

// 5. Local scope 
// JS에서 scope란 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있는 것, 위 개념에서 파생됨
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // 지역 변수
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); // 에러남
    //return undefined; 이 들어가 있는 것과 같다.
}
printMessage();

// 6. Return a vulue
// 모든 함수는 return undefined 이 들어가 있거나, 값을 리턴하거나 둘중 하나.
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit

// 나쁜 예
function upgradeUser(user) {
    if (user.point > 10) {
        // ~~블라블라 업그레이드 로직
    }
}

// 좋은 예, 조건이 맞지 않을 땐 빨리 리턴해서 함수 종료 후 조건이 맞을 때만 필요한 로직을 실행하는게 좋다.
function upgradeUser(user) {
    if (user.point <=10 ) {
        return;
    }
    // ~~블라블라 업그레이드 로직
}

// 1. function은 다른 변수와 마찬가지로 변수에 할당이 되고, fuction에 parameter로 전달이 되며, return 값으로도 리턴이 된다.

// Function expression은 할당된 다음부터 호출이 가능하다
// Function declaration은 호이스팅이 된다. (정의하기 전 호출)
const print = function () { // 이름없고, 파라미터도 없는 anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
// Anonymous function
const printYes = function () {
    console.log('yes!');
};
// named function 디버깅 시 필요
const printNo = function print() {
    console.log('no!');
    //print();  // 함수안에서 함수 자신 스스로를 부르는 것을 Recursion(리커젼)이라고 한다. 무한반복
};
randomQuiz('hate you', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function 애로우 펑션은 무조건 이름없는 펑션이다.
const sinplePrint = function () {
    console.log('simplePrint!');
};
// arrow fuction
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // 복잡해질 경우 {} 를 사용할텐데 사용 시 값을 return 해주어야 한다. 
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수선언을 ()로 묶고 바로 (); 해주면 선언하자마자 바로 호출할 수 있다.
(function hello() {
    console.log('IIFE');
})();