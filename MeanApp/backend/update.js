var AWS = require('aws-sdk');
let awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIATDLJCIZ3YUOSWO64", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);
// var updateName = function(id,name,callback) {
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
    TableName: 'Student',
    Key: {
        'id': { N: '103' }
    },
    // UpdateExpression: {
    //     ":name": {"S":newval}
    //     "SET name = :newval"
    // },
    UpdateExpression: 'SET #name =:val1',
    ExpressionAttributeNames: {
        '#name': 'name' //COLUMN NAME       
    },
    ExpressionAttributeValues: {
        // ":val1": "anup"
        ':val1': {
            'S': "ram"
        },
    }
    // UpdateExpression: "SET name = :S",
    // ExpressionAttributeValues: {
    //     "S:anup": name
    // },
    // ReturnValues: "UPDATED_NEW"
};

console.log("Data Update");
// Call DynamoDB to add the item to the table
ddb.updateItem(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});
// ddb.update(params);
// }