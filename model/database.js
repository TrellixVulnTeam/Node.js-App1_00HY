const mongodb = require('mongodb');
const Client = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) =>{
    Client.connect('mongodb://localhost/node-app')
    .then(client =>{
        console.log('connected');
        _db =client.db();
        callback(client);
    })
    .catch(err =>console.log(err) )
}

const getdb = () => {
    if(_db){
        return _db;
    }
    return console.log('hata');
}

exports.mongoConnect = mongoConnect;
exports.getdb = getdb