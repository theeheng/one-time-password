const twilio = require('twilio');

const accountSid = '';
                  
// This token has been revoked, don't bother trying :)
const authToken = '';
                 

module.exports = new twilio.Twilio(accountSid, authToken);
