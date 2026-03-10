const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {

try{

const {name,email,password,semester} = req.body;

const hashed = await bcrypt.hash(password,10);

const user = new User({
name,
email,
password:hashed,
semester
});

await user.save();

res.json({message:"User Registered"});

}catch(err){

res.status(500).json(err);

}

};

const login = async (req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.status(404).json({message:"User not found"});
}

const match = await bcrypt.compare(password,user.password);

if(!match){
return res.status(400).json({message:"Wrong password"});
}

res.json(user);

};

module.exports = { register, login };