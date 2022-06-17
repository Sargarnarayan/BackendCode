
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
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", JSON.stringify(data, null, 2));
    console.log(data.Item);
  }
//   console.log(data.Item);
});




