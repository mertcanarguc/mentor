const mongoose = require("mongoose")
const Schema = mongoose.Schema

const konuSchema = new Schema({
    s:String,
    konu:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Konu",konuSchema)