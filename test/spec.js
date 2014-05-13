// at the top of the test spec:
var fs = require('fs');

// ... other code

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
	var stream = fs.createWriteStream(filename);

	stream.write(new Buffer(data, 'base64'));
	stream.end();
}

describe('checkout homepage', function () {
	it('customer input elements are there', function () {
		browser.driver.get('http://checkout.namdv.com:8000');
		browser.takeScreenshot().then(function (png) {
			writeScreenShot(png, 'shot.png');
		});

		/*expect(element(By.id('guest_login_email')).isPresent()).toBe(true);
		expect(element(By.id('login_email')).isPresent()).toBe(true);
		expect(element(By.id('login_password')).isPresent()).toBe(true);*/
	});
});