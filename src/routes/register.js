const express=require('express');
const controller=require('../controllers/register')
const router=express.Router();

router.post('/add',controller.registeForms)

module.exports=router