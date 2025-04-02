// router/customer_router.js
// 라우터 모듈
const express = require('express');
const router = express.Router();
const custService = require('../service/customer_service.js');

// customers
// 전체조회 : GET + '/customers'
router.get('/customers',async (req,res)=>{
  let custList = await custService.findAll();
  res.send(custList);
});
// 단건조회 : GET + '/customers/:id'
router.get('/customers/:id', async (req,res)=>{
  let custId = req.params.id;
  let custInfo = await custService.findById(custId);
  res.send(custInfo);
});
// 등록     : POST + '/customers' + JSON
router.post('/customers', async (req,res)=>{
  let addCust = req.body;
  let result = await custService.addCustomer(addCust);
  res.send(result);
});
// 수정     : PUT + '/customers/:id' + JSON
router.put('/customers/:id',async (req,res)=>{
  let custId = req.params.id;
  let custUpInfo = req.body;
  let result = await custService.modifyCustomerInfo(custUpInfo,custId);
  res.send(result);
});
// 삭제     : DELETE + '/customers/:id'
router.delete('/customers/:id',async(req,res)=>{
  let custId = req.params.id;
  let result = await custService.removeCustomerInfo(custId);
  res.send(result);
});

module.exports = router;