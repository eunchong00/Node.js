// middleApp.js
const express = require('express');
const app = express();
//미들웨어 등록
const session = require('express-session');
const cors = require('cors');
const { options } = require('./router/emp_routers');

let sessiontSetting = session({
  secret : '%&^%7&^%&^FDB%*$CYR%fd',
  resave : false,
  saveUninitialized : true,
  cookie : {
    httpOnly : true,
    secure : false,
    maxAge : 60000
  }
});

app.use(sessiontSetting);

app.use(express.json());

// CORS 설정
// 1) 모든 origin과 모든 요청에 응답
// app.use(cors());

// 2)지정한 요청에 대해서만 응답
const corsDption = {
  origin : 'http://192.168.0.43:5500',
  optionsSuccessStatus : 200,
}
app.use(cors(corsDption));

app.listen(3000, ()=>{
  console.log('http://localhost:3000');
});

app.post('/login', (req, res)=>{
  const { id, pwd } = req.body;
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save(function(err){
    if(err) throw err;
    // res.redirect('/');
    res.send(req.session);
  })
});

app.get('/', (req, res)=>{
  res.send(req.session);
});

app.get('/logout', (req, res)=>{
  req.session.destroy();
  res.redirect('/');
});