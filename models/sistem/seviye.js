const mongoose = require("mongoose")
const Schema = mongoose.Schema

const seviyeSchema = new Schema({
    seviye:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Seviye",seviyeSchema)