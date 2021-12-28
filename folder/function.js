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