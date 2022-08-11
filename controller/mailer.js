const mail = require ('nodemailer');


const  mailer = (current_email, current_person, current_message) =>{
    var transporter = mail.createTransport({
      service: 'gmail',
      auth: {
        user: 'webrider1322@gmail.com',
        pass: 'dwmhbcryfcpqjgnt'
      }
    });
    
    var mailOptions = {
      from: 'webrider1322@gmail.com',
      to: current_email,
      subject: 'You have a message from your past',
      text: current_message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        
      }
    });
  }

  exports.mailer = mailer;