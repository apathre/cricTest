
const {google} = require('googleapis');
const privatekey=require('./service-account-credentials.json');


exports.jwtClient=()=>{

// configure a JWT auth client
let jwtClient = new google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/calendar']);

        //authenticate request
    jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Successfully connected!");
    }
    });

    return jwtClient;
}