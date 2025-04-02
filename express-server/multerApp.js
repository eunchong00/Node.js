// multerApp.js

const multer = require('multer');
const path  = require('path');
const cors = require('cors');

const express = require('express');
const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination : function(req, file, cb){
    cb(null, 'uploads/');
  },
  filename : function(req, file, cb){
    let savedFile = (new Date()).valueOf() + path.basename(file.originalname);
    cb(null, savedFile);
  }
});

const upload = multer({storage : storage});

app.listen(5000, ()=>{
  console.log('Server Start!!');
});

app.post('/profile',upload.single('avatar'), (req,res)=>{
  console.log(req.file);
  console.log(req.body);
  res.end();
});

app.post('/photos', upload.array('photos',8),(req,res)=>{
  for(let file of req.files){
    console.log(file);
  }
  res.end();
})