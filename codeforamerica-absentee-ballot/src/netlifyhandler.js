exports.handler = function(e, context, callback) {
	e.preventDefault()
    const {phone}=e.target;
	// console.log(phone.value);
	if(phone!==undefined){
		let newPhone=phone.value.split('-');
		newPhone=newPhone.join('');
		console.log(newPhone);
		const accountSid = 'ACdfb2198d9f107fa238a643ec05971d12';
		const authToken = 'a3ca39344339d4e05f069d9f11dec7fd';
		//Initialize a REST client in a single line:
		const client = require('twilio')(accountSid, authToken);

		// Use this convenient shorthand to send an SMS:
		client.messages.create({
			to:'+17208192478',
			from:`+1${newPhone}`,
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
}