const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bransSchema = new Schema({
    brans:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Brans",bransSchema)