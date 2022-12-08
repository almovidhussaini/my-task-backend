const mongoose = require("mongoose");
const VehicleSchema = mongoose.Schema(
    {
        model:{
            type:String,
            minlength: 3,
            required:[true, 'please provide name']
        },
        price:{
            type:Number,
            required:[true,'please provide price details']
        },
        phonenumber:{
            type:String,
            minlength: 11,
            required:[true, 'please provide phone number']
            
        },
        images:[
            {type: String,
                required: [true,'please provide image url'],
            }

        ],
        user:{
            type:String,
            required:[true,'please give user id']
        }
    }
)
const Vehicle = mongoose.model("Vehicle",VehicleSchema)
module.exports = Vehicle;