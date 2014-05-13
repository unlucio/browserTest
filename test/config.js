exports.config = {

	//http://www.browserstack.com/automate/node#setting-local-tunnel
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	seleniumAddress: 'http://hub.browserstack.com/wd/hub',
	allScriptsTimeout: 2000000,
	capabilities: {
		'browserName': 'chrome',
		/*'browserstack.user': 'giuseppemortazza',*/
		'browserstack.user': 'cirpo',
		'browserstack.local': true,
		/*'browserstack.key': 'h9DWk1AcK8ygmtDwBezK'*/
		'browserstack.key': 'yUCVHxXMQb7pAHTqpPqx'
	},

	suites: {
		checkoutCOD: 'spec.js'
	},

	params: {
		email: 'test+test@namshi.com'
	},

	jasmineNodeOpts: {
		showColors: true,
		isVerbose: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 500000
	}
};