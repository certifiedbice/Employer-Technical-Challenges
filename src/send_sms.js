//exports.handler = function(event, context, callback) {
    // your server-side functionality

	// Download the helper library from https://www.twilio.com/docs/node/install
	// Your Account Sid and Auth Token from twilio.com/console
	// DANGER! This is insecure. See http://twil.io/secure
	const accountSid = 'ACdfb2198d9f107fa238a643ec05971d12';
	const authToken = '4a3d78a194c018b589f74d1e6006b0f3';
	const client = require('twilio')(accountSid, authToken);

	client.messages
  		.create({
    		body: 'This is the ship that made the Kessel Run in fourteen parsecs? Right',
     		from: '+15625014648',
     		to: '+17208192478'
   		})
  		.then(message => console.log(message.sid));
//}