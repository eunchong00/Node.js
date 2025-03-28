// router/emp_routers.js
const express = require('express');
const router = express.Router();
const { query } = require('../mapper/emp-map.js');


// REST API
// 전체조회 : GET + '/emps'
router.get('/emps' , (req, res)=>{
  let list = query('SELECT');
  res.send(list);
});


// 단건조회 : GET + '/emps/100'
router.get('/emps/:empId', (req,res)=>{
  let searchId = req.params.empId;
  let info = query('SELECT', null, { id: searchId});
  res.send(info[0]);
});


//등록 : POST + '/emps' + JSON
router.post('/emps', (req, res)=>{
  let addInfo = req.body;
  query('INSERT', addInfo);
  res.send({ 'result' : 'success'});
});

//수정 : PUT + '/emps/100' + JSON
router.put('/emps/:eId', (req, res)=>{
  let searchId = req.params.eId;
  let updateInfo = req.body;
  query('UPDATE', updateInfo, { id : searchId});
  res.send({'result' : 'success', 'id' : searchId});
});

//삭제 : DELETE + '/emps/100'
router.delete('/emps/:empId', (req,res)=>{
  let searchId = req.params.empId;
  query('DELETE', null, { id: searchId});
  res.status(204).send('Completed');
});





module.exports = router;