// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: 'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'your-client-secret-here', // your App Secret
		'callbackURL' 	: 'http://localhost:8181/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'xHT1DeCEzZ1rz6OWadVuxHltX',
		'consumerSecret' 	: 'a5gJG5tNFDYmVk0TtFenGeOzA0vCUo20XqbfCgGeITUcaObu5k',
		'callbackURL' 		: 'http://localhost:8181/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8181/auth/google/callback'
	}

};
