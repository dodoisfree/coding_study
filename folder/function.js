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