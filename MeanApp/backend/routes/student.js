
require('dotenv').config();

var AWS = require('aws-sdk');
let awsConfig = {
    region :"ap-south-1",
    endpoint: "http://dynamodb.ap-south-1.amazonaws.com",
    accessKeyId:process.env.AWS_KEY,
     secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);


const express = require('express');
const router = express.Router();
// const AWS = require('aws-sdk');
const { response } = require('express');
const { error } = require('console');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'Student';

router.get('/', async (req, res) => {
    const params = {
        TableName: dynamodbTableName,
        key: {
            'id': req.query.id
        }
    }
    await dynamodb.get(params).promise().then(response => {
        res.json(response.Item);
    }, error => {
        console.error('student error handling here', error);
        res.status(500).send(error);
    })
})

router.get('/all', async (req, res) => {
    const params = {
        TableName: dynamodbTableName,
    }
    try {
        const allStudent = await scanDynamoRecords(params, []);
        const body = {
            Students: allStudent
        }
        res.json(body);
        // res.send(body);
    } catch (error) {
        console.log('custom error handling here', error);
        res.status(500).send(error);
    }
})


router.post('/posts', async (req, res) => {
    var studentId = (new Date().getTime());
    // var studentId = (studentId.length + 1);
    var data1= req.body;
    var data = {
        id:studentId,
        'name': data1.name,
        'Department':data1.Department,
        'city': data1.city
    }
    console.log(data1);
    const params = {
        TableName: dynamodbTableName,
        Item: data
    }
    await dynamodb.put(params).promise().then(() => {
        const body = {
            Operation: 'SAVE',
            Message: 'SUCCESS',
            Item: req.body
        }
        res.json(body);
    }, error => {
        console.log('custom error handling here', error);
        res.status(500).send(error);
    })
})

router.put('/update', async (req, res) => {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'id': req.body.id,
            // 'name': req.body.name,
            // 'Department': req.body.Department,
            // 'city': req.body.city

        },
        UpdateExpression: `set ${req.body.updateKey} =:value`,
        ExpressionAttributeValues: {
            ':value': req.body.updateValue
        },
        // ReturnValues: 'updated_New'
    }
    await dynamodb.update(params).promise().then(response => {
        const body = {
            Operation: 'update',
            Message: 'Success',
            UpdatedAttributes: response
        }
        res.json(body);
    }, error => {
        console.log('custom error handling here', error);
        res.status(500).send(error);
    })
})



router.delete('/delete', async (req, res) => {
    const params = {
        TableName: dynamodbTableName,
        Item: {
            'id': req.body.id
            // "id":102
        },
        ReturnValues: 'All_Old'
        // KeyConditionExpression: "#id = :val",
        // ExpressionAttributeNames:{
        //     "#id": "id"
        // },
        // ExpressionAttributeValues: {
        //     ":val":'id'
        // }
    }
    await dynamodb.delete(params).promise().then(response => {
        const body = {
            Operation: 'Delete',
            Message: 'Success',
            Items: response
        }
        res.json(body);
    }, error => {
        console.log('custom error handling here', error);
        res.status(500).send(error);
    })

})


async function scanDynamoRecords(scanParams, itemArray) {
    // console.log('data', await (process.env.accessKeyId));
    // console.log('data', await (process.env.secretAccessKey));
    try {
        const dynamoData = await dynamodb.scan(scanParams).promise();
        itemArray = itemArray.concat(dynamoData.Items);
        if (dynamoData.LastEvaluatedKey) {
            scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
            return await scanDynamoRecords(scanParams, itemArray);
        }
        return itemArray;
    } catch (error) {
        throw new Error(error);
    }
}



module.exports = router;