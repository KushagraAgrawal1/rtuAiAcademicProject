const API = "http://localhost:5000/api";

async function register(){

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const res = await fetch(API+"/auth/register",{

method:"POST",
headers:{"Content-Type":"application/json"},

body:JSON.stringify({name,email,password})

});

alert("Registered Successfully");

window.location="login.html";

}

async function login(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const res = await fetch(API+"/auth/login",{

method:"POST",
headers:{"Content-Type":"application/json"},

body:JSON.stringify({email,password})

});

const data = await res.json();

localStorage.setItem("token",data.token);

window.location="dashboard.html";

}

async function addMarks(){

const subject = document.getElementById("subject").value;
const marks = document.getElementById("marks").value;

await fetch(API+"/marks/add",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":localStorage.getItem("token")
},

body:JSON.stringify({subject,marks})

});

alert("Marks Added");

}