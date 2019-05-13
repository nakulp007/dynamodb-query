var awsConfig = require("./config");
var AWS = require("aws-sdk");
AWS.config.update(awsConfig);


let docClient = new AWS.DynamoDB.DocumentClient();

let fetchByArrayOfKeys = function() {
    var params = {
        "tables":{
            "r_cat": {
                "Keys": [
                    {
                        "id": "00"
                    },
                    {
                        "id": "02"
                    }
                ]
            }
        }
    };

    docClient.batchGet(params, function(err, data){
        if(err){
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }else{
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}

fetchByArrayOfKeys();