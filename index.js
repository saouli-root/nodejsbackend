const express = require ("express")
const mongoose =require ("mongoose")
const server = express ()
const cors = require("cors")
const bodyParser = require ("body-parser")
const port = process.env.PORT || 5000 


require ("dotenv").config()


const condidats = require ("./routes/api/condidats")
const employees = require ("./routes/api/employees")
const rh =require ("./routes/api/rh")
//const { application } = require("express")
console.log(port)
server.use(cors({
  origin: 'http://localhost:3000'
}))
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())

//connect to MongoDB
mongoose.connect(
process.env.DATABASE,

{
    useNewUrlparser :true,
    //use..
    //use..
  useUnifiedTopology:true
    
}
)
.then(() => console.log('Database successfuly connected'))
.catch(err => console.log(err));

server.use("/api/rh",rh)
server.use("/api/condidats",condidats)
server.use("/api/employees",employees)

server.listen(port | 5000, () => console.log ("server working"))