//Call Modules
const cron = require('node-cron');
const express = require ('express');
const body_parser = require ('body-parser');
const app = express();
const path= require('path');

// Call Controllers
const mongoConnect = require('./model/database').mongoConnect;
const User = require('./controller/person');
const timeDetector = require('./controller/timeDetector').timeDetector;


app.use(express.static('dist'));
app.set("view engine","pug");
app.set("views", "./views");


app.use(body_parser.urlencoded({extended: false}));

app.use("/sended", (req,res,next)=>{
    const name = req.body.Fullname;
    const email = req.body.email;
    const date = req.body.date;
    const message = req.body.message;

    const user = new User(name , email, date, message);

    user.save()
      .then( result => {
        res.redirect("/sended=completed");
      })
      .catch(err => console.log(err))
})
app.use('/sended=completed', (req, res, next) => {
  res.render('notify' , {title : 'Travelers2'})
});

app.use('/', (req, res, next) => {
    res.render('index' , {title : 'Travelers'})
});

//Cron-Jobs

cron.schedule('59 23 * * *', function () {
    const users = User.findAll()
                      .then(data => {
                          timeDetector(data);
                      })
                      .catch(err => console.log(err))
})

mongoConnect(()=> {
  app.listen(5500)
})





