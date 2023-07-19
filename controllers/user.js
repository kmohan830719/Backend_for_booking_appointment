const User=require('../models/user');

exports.getUserData=(req,res,next)=>{
    User.findAll().then(users=>{
        res.send(users);
    })
    .catch(err=>console.log(err));
};

exports.postUserData=(req,res,next)=>{
    const Name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone_no;
    const date=req.body.date;
    const time=req.body.time;
    User.create({
        name:Name,
        email:email,
        phone_no:phone,
        date:date,
        time:time
    }).then(result=>{
        res.send(result)})
    .catch(err=>console.log(err));
}

exports.deleteUserData=(req,res,next)=>{
    const userId=req.params.userId;
    console.log(userId)
    User.findByPk(userId).then(user=>{
      user.destroy();
      console.log('USER DELETED')
    })
    .catch(err=>console.log(err));
}