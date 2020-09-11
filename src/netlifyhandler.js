exports.handler = function(event, context, callback) {
    // your server-side functionality

	// Download the helper library from https://www.twilio.com/docs/node/install
	// Your Account Sid and Auth Token from twilio.com/console
	// DANGER! This is insecure. See http://twil.io/secure
	
	// const accountSid = 'ACd4b505130da1a6a850be4df1a065a58b';
	// const authToken = '77693b21e0634c088a5d92a2730742ff';
	// const client = require('twilio')(accountSid, authToken);

	// client.messages
  	// 	.create({
    // 		body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    //  		from: '+15108803280',
    //  		to: '+17208192478'
   	// 	})
  	// 	.then(message => console.log(message.sid));

	console.log('test')
}