const mailer = require ('./mailer').mailer;

const today = new Date();

const timeDetector = (data) =>{
    data.map((value,index) => {
      const userDate = value.date;
      var current_day = today.getDate().toString();
      var current_month = (today.getMonth()  + 1).toString();
  
      if( Number(current_month) < 10){
        current_month = '0' + current_month;
      }
  
      const current_year = today.getFullYear().toString();
      const current_date = current_year + '-' + current_month + '-' + current_day;
  
  
      if(userDate == current_date) {
        const current_email = value.email;
        const current_message = value.message;
        const current_person = value.Fullname;
  
        mailer(current_email, current_person, current_message);
      }
  
    })
  
  }

  exports.timeDetector = timeDetector;