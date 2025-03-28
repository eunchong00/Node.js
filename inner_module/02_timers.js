// inner_module/02_timers.js | 1000 = 1초
const timeout = setTimeout(() => {
  let today = new Date();
  console.log(today.toLocaleTimeString());
}, 2000);

showTime();
const interval = setTimeout(()=>{
  showTime();
}, 2000);

let count = 0;
interval = setInterval(()=>{
  console.log('interval %d', count++);
  if(count == 2){
    clearInterval(interval);
  }
}, 1000);

console.log('End!');
