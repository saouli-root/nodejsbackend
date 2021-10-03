




//LOGIN TIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIME :)
server.post ("/login",(req,res) => {   // tjina request
   // console.log(req.body)
rh.findOne({ email:req.body.email})  // ylga user
.then(user => {      
        if(!user){
                        res.send("user not exist")         // ida mlgahch hdi wida lgah ycompari lmotdepasse
        }else{
                        // res.send("user exist").....bkri nkhdmo hk mé drk ncompariw
                                bcrypt.compare(req.body.password,user.password)
                                //.then(res.send("login success")).....hdi hta w mdp ghalt tkhrjlk success ws7i7a hya 
                                .then (correct => {
                                    if(correct){
                                    //send token
                                    jwt.sign(token,"webapp") // n3tiha secret or privat key.....web app mdina mé nrmlmnt
                                    //motdepasse wlmotdepasse ytsjl fi environment variable+ida kan kyn kch option 
                                  res.send (
                                      "Login : success"+//token ta3 am yjiw kifkif
                                })
                                }
                               else  res.send ("password incorrect")
                                })

                                .catch(res.send("password incorrect")) 
}
})

//.catch(res.send("errror"))
.catch(console.error)
//......كي يكون كاين ارور ميديرش res.send
})






0





000




