// app.js
const express = require('express');
const app = express();

// 서버 실행
app.listen(5000, ()=>{
  console.log('서버가 실행됩니다.');
  console.log('http://localhost:5000');
});


app.use(express.urlencoded({extended : false}));
// application/json
app.use(express.json());

const empRputer = require('./router/emp_routers.js');
app.use('/', empRputer);

//Error handler
app.use(function(err, req, res, next){
  res.status(500).json({statusCode : res.statusCode,
                        errMessage : err.message});
});

app.get('/error', (req, res, next)=>{
  next(new Error('Precess Fail! Check Data!'));
});

//정적파일 (css, html, js, image 등) 처리
app.use('/img', express.static('./fruits'));