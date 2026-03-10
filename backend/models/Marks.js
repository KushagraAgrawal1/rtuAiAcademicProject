const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

subject:String,

topic:String,

midterm1:Number,

midterm2:Number

});

module.exports = mongoose.model("Marks",marksSchema);