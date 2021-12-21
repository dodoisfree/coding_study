// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable
// Let (added in ES6)
let globalName = 'global name';
{
    let name = 'dodoisfree';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) 끌어올리기
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Contants는 값을 선언하면 절대 변경할 수 없음.
// immutable data type 이라고 불림 
// -보안성, 쓰레드에서 보호, 타 개발자가 코드변경 시 실수 방지
// 정리하면 js에서 변수 선언 시 Mutable type의 let, immutable type의 const 두가지가 있음

const daysnWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive type(더 이상 작은 단위로 나눠질 수 없는 한가지의 아이템) : number, string, boolean, null, undefiedn, symbol 등이 있다.
// object type은 싱글 아이템들을 묶어 박스로 관리할 수 있게 해주는 것 : function 등

// js에서 숫자는 number선에서 처리가능
const count = 17; // integer 정수
const size = 17.1; // decimal number 소수
console.log(`value: ${count}, type: ${typeof conut}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - infinity, negativeInfinity, Nat a Number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);
// 최근 bigInt 라는게 추가 되어 엄청 큰 숫자 뒤에 n 붙이면 사용가능 보편화 아직 x (1234567890123456789012345678901234567890n)