const Marks = require("../models/Marks");

exports.addMarks = async(req,res)=>{

try{

const marks = new Marks(req.body);

await marks.save();

res.json({message:"Marks Saved"});

}catch(err){

res.status(500).json(err);

}

};