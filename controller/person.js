const getDb = require('../model/database').getdb;

class User{
    constructor(name, email, date, message){
        this.name = name;
        this.email = email;
        this.date = date;
        this.message = message;
    }

    save() {
        const db = getDb();

        return db.collection('users')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err))
    }

    static findAll() {
        const db = getDb();
        return db.collection('users')
            .find({})
            .toArray()
            .then(users => users)
            .catch(err => console.log(err))
    }

    static delete() {
        const db = getDb();

        return db.collection('users')
            .deleteOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err))
    }

}

module.exports = User;
