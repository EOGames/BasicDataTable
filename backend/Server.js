const express = require('express');
const cors = require('cors');
const app = express();
const {users} = require('./model');

app.use(express.json());
app.use(cors());

app.get('/',async (req,res)=>
{
    let data = await users.find();
    return res.json(
        {
            message: "Data Sent By server",
            status: 200,
            userData: data
        });
});

app.post('/register',async (req,res)=>
{

    try {
     
    let usr =  new users(req.body);
    let response = await usr.save();
    console.log(response);
    return res.json(
        {
            'status':200,
            data:response
        });   
    } catch (error) {
        res.send(error);
    }
});

app.listen(5000,()=>
{
    console.log('server is up and running on port 5000');
});