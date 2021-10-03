const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Rh = new Schema({
email:String,
password:String,
})

module.exports= rh = mongoose.model("rh", Rh)