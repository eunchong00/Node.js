// app.js
const express = require('express');
const app = express();




app.listen(5000, ()=>{
  console.log('Server Start!');
  console.log('http://localhost:5000');
});

/*
  content-type       | express
  GET + QueryString  | request.query
  POST + QueryString | request.body
  JSON               | request.body
  경로에 값을 전달   | request.params 
*/
// 미들웨어 등록
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}));
// application/json
app.use(express.json());

const empRouter = require('./router/emp_routes.js');
app.use('/',empRouter);

// Error handler
app.use(function(err, req, res, next){
  //res.status(500).json({statusCode: res.statusCode, 
  //                     errMessage : err.message});
  //res.status(500).sendFile('error.html');
});

app.get('/error', (req, res, next)=>{
  next(new Error('Process Fail! Check Data!'));
});

// 정적파일(css, html, js, image 등) 처리
// app.use(express.static('./fruits'));

app.use('/img', express.static('./fruits'));

