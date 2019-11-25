const AWS = require('aws-sdk')
AWS.config.region = 'us-west-2'
const dynamodb = new AWS.DynamoDB.DocumentClient()


const req = {
    TableName: 'restaurants-dev-xiaoyong',
    Limit: 20 
}

const resp = dynamodb.scan(req, function(err, data) {
    if (err) {
        console.log("error", err);
    } else {
        data.Items.forEach(function(element, index, array) {
            console.log(element.name + " (" + element.image + ")");
        });
    }
});

