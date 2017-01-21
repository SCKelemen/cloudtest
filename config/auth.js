// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '408721156127597', // your App ID
		'clientSecret' 	: 'fcef4efb49700042ea48897a5c93f6bc', // your App Secret
		'callbackURL' 	: 'https://appfinity.us/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'xHT1DeCEzZ1rz6OWadVuxHltX',
		'consumerSecret' 	: 'a5gJG5tNFDYmVk0TtFenGeOzA0vCUo20XqbfCgGeITUcaObu5k',
		'callbackURL' 		: 'https://appfinity.us/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://67.205.156.5/auth/google/callback'
	}

};
