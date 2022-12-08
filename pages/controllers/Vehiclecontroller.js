const Vehicle = require('../model/Vehiclemodel');
// const User = require('../model/Usermodel')

exports.createvehicle = async(req,res)=>{
    try{
        let payload = {
            model:req.body.model,
            price:req.body.price,
            phonenumber:req.body.phonenumber,
            images: req.body.images,
            user: req.body.id
        }
        let vehicle=await Vehicle.create({
            ...payload
        });
        res.status(200).json({
            status:true,
            data: vehicle,
           
        })
    }
    catch(err){
        res.status(500).json({
            error: err,
            status: false,
        })

    }
}
exports.getvehicles = async(req,res)=>{
    try{
        const id =  req.query.id
        console.log(id)
        let vehicles =  await Vehicle.find( {user:id})
        if(vehicles){
            res.status(200).json({
                status:true,
                data: vehicles
            })
            
        }
        else{
            res.status(200).json({
                status:true,
                data:'no items to be display'
            })

        }
    }
    catch(err){
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}