var redis = require('redis');
var client = redis.createClient();
 
client.set('total', '1800');
client.on('connect', function () {
    console.log('connected');
});
