const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
        {
        username:{
            type:String,
            required:[true, 'please provide name']
        },
        password:{
            type: String,
            required:[true,'please provide password'],
            
        },
    }
    
)

const User = mongoose.model("User",UserSchema)
module.exports = User;