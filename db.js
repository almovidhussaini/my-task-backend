const mongoose = require('mongoose')
const connectdb =async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongoDB connected:`)
    }
    catch(error){
        console.log(error)
        process.exit(1)

    }
}
module.exports = connectdb