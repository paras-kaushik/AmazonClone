const mongoose = require("mongoose")

const mongoDbUrl ='mongodb+srv://paraskaushik12:Cr6xAYaTSauQatmX@cluster0.yx3uqa3.mongodb.net/'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports = { connectDb }
