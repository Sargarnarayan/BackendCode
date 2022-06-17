var AWS = require('aws-sdk');
let awsConfig = {
  "region": "ap-south-1",
  "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
  "accessKeyId": "AKIATDLJCIZ3YUOSWO64", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
  TableName: 'Student',
  Item: {
    'id':{N: '108'},
    'name':{S:'narayan'},
    'Department':{S:'computer'},
    'city':{S:'pune'}
  }
};
console.log("data send");
// Call DynamoDB to add the item to the table
ddb.putItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});