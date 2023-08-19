const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('./db/config');
 const Users =require('./db/Users');
 app.use(express.json());
 app.use(cors());

 app.post("/register", async(req,res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);
    

res.send(result);
 }
 
 )
 app.post("/login",(req,res)=>{

    if(req.body.password&&req.body.email){

        let user = await .user.findOne(req.body).select("-password");
        if(user){
            res.send(user);

        }else{
            res.send({result:'no user found'})
        }
    }else{
        res.send({result:'no user found'})
    }
 })


app.listen(5000);