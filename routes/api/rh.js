
const express = require ("express");
const mongoose = require("mongoose");
const server = express.Router();
const bcrypt = require ("bcryptjs")
const jwt = require ("jsonwebtoken")

// جابهم بكل ل مودلز
const RH =       require ("../../models/RH")
const Condidat = require ("../../models/Condidat")
const Employee = require ("../../models/Employee")


server.post("/view",(req,res) => {

Condidat

.find()
.then  (condidates => res.send (condidates))
.catch (console.error)
})

//تنتهي العملية الاولى هنا



// هنا مدير الموارد البشرية راح يقبل المترشحين برك
// مرحلة القبول انك تبعت معلومات المترشح في ثابت الموظف 
server.post("/accept",(req, res) => {

condidat
.findOne ({ email:req.body.email } )
//.findOne ({$and :[{ email:req.body.email } , { exp: { $gt :3 } }]} )
.then(condidat=> {
const newEmp = new Employee({
    fullName: condidat.fullName,
    email: condidat.email,
    password: condidat.password,
    phone: condidat.phone,
    job: condidat.job,
    registerDate:condidat.registerDat,
    exp:condidat.exp,
    certificates:condidat.certificates,
    //..باه المعلومات لي جاو  من روشارش يتحطو ف ..كونديدا  new employee
})
.save()
.then  (() => res.send ("success"))
.catch (console.error)

})
.catch(console.error)
})



//تنتهي العملية الثانية هنا



//login 
server.post ("/login",(req,res) => {  // tjina request طلب
rh.findOne({ email:req.body.email}) // lginah s77777777777iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii777 so ncompariw lmotdepasse
.then(user => {     
if(!user){
res.send("user not exist")       // ila mlgitouch gol aw mknch
} else {                           // wila
  //  res.send ("user exist") // gal ani lgito kolshi mbrouk ro7 9arnou drk
bcrypt.compare(req.body.password,user.password) // ila lgito f la base des donées comparih kayn ima 1 aw 2
.then (correct => {
// chty correct hdi ysmoha ismatch 7wssi 3liha
if(correct){
    //send token
         const response = {
         _id:user._id,
         email:user.email
         }
jwt.sign(response,"webapp",{
    expiresIn:86400
},(err,token) =>{
res.send ({               
Login : true,
token:token})     })      }

else
res.send ("password incorrect") 
})
.catch(console.error)
}
})
.catch(console.error)
})


//كلمة مرور مشفرة


server.post("/register",(req,res)=>{
    bcrypt.genSalt (10,(err,salt) => {
        bcrypt.hash(req.body.password,salt,(err, hash) =>{
            const newUser =new RH ({
                email:req.body.email.toLowerCase(),
              password: hash
            })
  newUser.save()
 .then(()=> res.send ("success"))
 .catch(console.error)
        })
    })
})


module.exports = server ;















// how to call it in insomnia
//npm install bcryptjs 
//http://localhost:3000/api/rh/register
//{"email":
//"hananesaouli98@gmail.com",
//"password":"hello2021"
//}
//
//
//
//
//
//
//server.post("/view",(req,res) => {
   // Condidat
    //.find( $or  [{job :{fullstack developper}} , {exp:5}]  )
    //.find( $or[{age:{$gte:30}} , {certificates:['bac','lisance','master']}]   )
//
//
//
//
//
//
//
//.findOne({ $and: [{ email:req.body.email },{age:{$gt:20}}] 


