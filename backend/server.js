const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const marksRoutes = require("./routes/marksRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
res.send("RTU AI Academic Analyzer API Running ");
});

app.use("/api/auth",authRoutes);
app.use("/api/marks",marksRoutes);

app.listen(5000,()=>{
console.log("Server running on port 5000");
});