// js with server/08_promise.js
let timeAsync = new Promise((resolve, reject) => {
  //비동기 작업
  let result = false;

  setTimeout(() => {
    result = true;
    console.log('비동기 작업 수행');
    if(result){
      resolve('result : 성공');
    }else{
      reject(new Error('result : 실패'));
    }
  }, 3000);
});

// console.log(timeAsync);
timeAsync
.then((success)=>{
  console.log(success);
  return '첫번째 작업 완료';
},(fail)=>{
  console.log(fail);
})
.then((success)=>{
  console.log(success);
  throw new Error('후속 처리 중 에러 발생');
})
.catch(console.log);
console.log('작업종료');