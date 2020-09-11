// import config from '../config';
exports.handler = function(event, context, callback) {
    // your server-side functionality

	// const accountSid = 'ACdfb2198d9f107fa238a643ec05971d12';
	// const authToken = '4a3d78a194c018b589f74d1e6006b0f3';
	//Initialize a REST client in a single line:
	const client = require('twilio')('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');

	// Use this convenient shorthand to send an SMS:
	client.sendSms({
		to:'+17208192478',
		from:'+15625014648',
		body:'ahoy hoy! Testing Twilio and node.js'
	}, function(error, message) {
		if (!error) {
			console.log('Success! The SID for this SMS message is:');
			console.log(message.sid);
			console.log('Message sent on:');
			console.log(message.dateCreated);
		} else {
			console.log('Oops! There was an error.');
		}
	});
}