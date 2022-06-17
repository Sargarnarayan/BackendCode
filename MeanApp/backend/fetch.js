// var AWS = require('aws-sdk');
// let awsConfig = {
//   "region": "ap-south-1",
//   "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
//   "accessKeyId": "AKIATDLJCIZ3YUOSWO64", "secretAccessKey": "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"
// };
// AWS.config.update(awsConfig);
 
// const express = require('express');
// const AWS = require('aws-sdk');
// const http = require('http');
// const app = express();
// const server = http.createServer(app);
// app.use(express.json());
// AWS.config.region = 'ap-south-1';
// const docClient = new AWS.DynamoDB.DocumentClient();

// app.get('/Student', async(req, res)=>{
//     try{
//         const params={
//             TableName: 'Student',
//             KeyConditionExpression: 'id = :id',
//             ExpressionAttributeValues: {
//                 ':id': 103

//             }
//         }
//         const result = await docClient.query(params).promise();
//         console.log(result);
//         res.status(200).send(result)
//     }catch(error){
//         console.log(error);
//     }
// })
// server.listen(5000, () => {
//     console.log('Server is running 5000');
// });


var AWS = require('aws-sdk');
let awsConfig = {
  "region": "ap-south-1",
  "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
  "accessKeyId": "AKIATDLJCIZ3YUOSWO64", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);


// Create DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
  TableName: 'Student',
  Key: {
    'id': {N: '102'}
  },
  
};
// Call DynamoDB to read the item from the table
ddb.scan(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", JSON.stringify(data, null, 2));
    console.log(data);
  }
//   console.log(data.Item);
});


