// js with server/02_declare_func.js

// 1)함수 선언문 => var 같은특징. 
/*함수호스팅
var plus = function(x, y, z){
  return (x+y+z);
}
  */
let result = plus(1,2);
console.log(result);

function plus(x,y){
  return (x+y);
}

function plus(x, y, z){
  return (x + y + z);
}

const printMsg = function(keyword){
  return "result : + " + keyword;
}
// 결과 = NaN : Not a Number

// 3) 화살표함수 : () => {}
  // 3-1) 익명함수
let aray = [1,2,3,4,5];
aray.forEach(val => console.log(val));

const highFun = function(num){
  return(x) => {
    return x + num;
  }
}

const addNum = highFun(10);
/*
addNum = (x) => {
  return x + 10;
  }
*/
result = addNum(5);
console.log(result);

// 3-2) 화살표 함수 + 함수표현식
const multi = (x,y) => x * y;
console.log(multi(2,4));