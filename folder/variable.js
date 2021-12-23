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
console.log(negativeInfinity);
console.log(nAn);
// 최근 bigInt 라는게 추가 되어 엄청 큰 숫자 뒤에 n 붙이면 사용가능 보편화 아직 x (1234567890123456789012345678901234567890n)

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// ``(백틱) 사용 시 간편하게 스트링 사용가능

// boolean(참, 거짓)
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 값이 없는게 의도된
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 의도되지 않고 값이 없는
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol 고유한 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type ${typeof symbol1}`); // .description으로 스트링으로 변환해서 변수 선언 해야 함.

// 5. Dyamic typing: dynamically typed language
// 프로그램이 동작할때 할당된 값에 따라서 타입이 변경될 수 있다.
let text = 'hello';
console.log(text.charAt(0)); // string hello 중 0번인 h 출력
// JS는 다이나믹 타이핑(런타임에서 타입이 정해짐) 중간에 type이 number로 변경 되었을 경우, 오류가 뜨는 경우가 많음
// 위 오류들 때문에 TypeScript가 나오게 됨.
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);


// object
const dodo = { name: 'dodo', age: 20 };
dodo.age = 28; 