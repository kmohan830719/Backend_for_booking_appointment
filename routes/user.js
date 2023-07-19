const express=require('express');
const router=express.Router();
const userController=require('../controllers/user');


router.get('/user',userController.getUserData);
router.post('/user',userController.postUserData);
router.delete('/user/:userId', userController.deleteUserData);

module.exports=router;