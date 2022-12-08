const User = require('../model/Usermodel')
var errorhandler = require('errorhandler')

exports.registeruser = async(req,res)=>{

    try{
        console.log(req.body,'req body')
        // const token = generateAccessToken({userdata:email})
        let payload= {
            username:req.body.username,
            password:req.body.password,
            // email:req.body.email
        }
        // let user = await User.findOne({ email:payload.email});
        // if(user){
        //     return res.status(400).send("User already registered.");
        // }
        let user=await User.create({
            ...payload
        });
        res.status(200).json({
            status:true,
            data: user,
           
        })
        
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.login = async(req,res)=>{
    console.log(req.body,'request body')

    try{
        let password = req.body.password;
        let username = req.body.username;
        // const token = generateAccessToken({userdata:email})

        let user= await User.findOne({username:username});
        if(user){
            if(user.password==password){
                res.send(user)
            }
            else{
                 res.status(500).json({
            error: err,
            status: false,
        })
            }
            
        }
        else{
            res.status(500).json({
            error: err,
            status: false,
        })
        }
    }
    catch(err){

        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })

    }
}