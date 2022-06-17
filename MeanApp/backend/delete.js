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
    Key: {
        // 'id': { N: 'id' }
        "#id":"id"
    },
    ExpressionAttributeNames: {
        "#id": "id"
    },
    ExpressionAttributeValues: {
        ":id": id
    }
};

//  delete the item from the table
ddb.deleteItem(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});
