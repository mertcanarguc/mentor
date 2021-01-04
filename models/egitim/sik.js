const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sikSchema = new Schema({
    text:String,
    resim:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Sik",sikSchema)