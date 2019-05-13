//run file using node read.js

var awsConfig = require("./config");
var AWS = require("aws-sdk");
AWS.config.update(awsConfig);


let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = function() {
    var params = {
        TableName: "users",
        Key: {
            "email_id": "u2@gmail.com"
        }
    };

    docClient.get(params, function(err, data){
        if(err){
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }else{
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}

fetchOneByKey();