require("dotenv").config()
const cors = require("cors");
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require('./router/contact-router')
const serviceRoute = require("./router/service-router")
const adminRoute = require("./router/admin-router");
const SubWebsite = require("./router/subwebsite-router");
const serviceRequest = require("./router/serviceReuest-router")
const internship = require("./router/intership-router");
const internshipApply = require("./router/internapply-router")         
         
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,       
  };    
           
app.use(cors(corsOptions));  
        
app.use(express.json());  
                       
app.use("/api/auth",authRoute);      
app.use("/api/form",contactRoute);  
app.use("/api/data",serviceRoute);  
app.use("/api/admin",adminRoute)    
app.use("/api/sub",SubWebsite)    
app.use("/api/request",serviceRequest)  
app.use("/api/form",internship)
app.use("/api/form",internshipApply)


  
// app.get("/", (req,res )=>{  
//      res.status(200).send("My name is prasad wandhekar");
// })


// app.get("/register", (req,res )=>{
//     res.status(200).send("Welcome to registerd ");
// })  

app.use(errorMiddleware);    

              
const PORT = 8000;

connectDb().then(() => {
app.listen(PORT,() => {
    console.log(`server is running at port ${PORT}`);
}) 
})        