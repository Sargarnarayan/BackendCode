// const dotenv = require('dotenv');

// dotenv.config('./config/.env');

// let devUrl = process.env.DEV_URL;
// console.log(`devUrl: ${devUrl}`);

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const  studentRouter = require('./routes/student');
// var id= ObjectId;
// var dynamodb = require('aws-sdk');
// var ObjectId  = dynamodb.ObjectID;

app.use(express.json());
app.use('/student', studentRouter);

app.get('/',(req, res)=>{
    res.send('hello express');
    // studentRouter.find((err, docs)=>{
    //     if(!err){
    //         res.send(docs);
    //     }else{
    //         console.log('Error get data'+ JSON.stringify(err, undefined, 2));
    //     }
    // });
});
// http://localhost:3000/student/all
app.get('/student/all', (req, res)=>{
    // if (!ObjectId.isValid(req.params.id)) 
    //     return res.status(400).send(`no record $(res.params.id)`);
        
    // studentRouter.findById(res.params.id, (err, doc)=>{
    //     if(!err){
    //         res.send(doc);
    //     }else{
    //         console.log('Error get data'+ JSON.stringify(err, undefined, 2));
    //     }
    // });


    res.send(res);
})

app.post('/student/posts', (req, res)=>{
    res.send();
})


app.put('/student/update', (req, res)=>{
    res.send();
})


app.delete('/student/delete', (req, res)=>{
    res.send();
})


app.listen(port, ()=>{
    console.log('lisen port'+ port);
})