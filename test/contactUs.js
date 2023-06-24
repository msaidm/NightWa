describe('Contact Us Test', function () {
    before(browser => browser.navigateTo('http://automationpractice.multiformis.com/index.php?controller=contact'));
  
    it('Contact Us Page and Form Test', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Contact us - My Store')
        .waitForElementVisible('form.contact-form-box', 5000)
        .assert.visible('form.contact-form-box');
    });
  
    // // Test without all required fields
    // it('Without all required fields', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="0"]');
    //     browser.setValue('input#email', '');
    //     browser.setValue('textarea#message', '');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.assert.containsText('.alert.alert-danger', 'Subject Heading, Email and Message cannot be blank.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with Entering Subject Heading only
    // it('Entering Subject Heading only', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="2"]');
    //     browser.setValue('input#email', '');
    //     browser.setValue('textarea#message', '');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Email and Message cannot be blank.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with Entering Valid Email only
    // it('Entering Valid Email only', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="0"]');
    //     browser.setValue('input#email', 'test@test.com');
    //     browser.setValue('textarea#message', '');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Subject Heading and Message cannot be blank');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with Entering Invalid Email only
    // it('Entering Invalid Email only', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="0"]');
    //     browser.setValue('input#email', 'test');
    //     browser.setValue('textarea#message', '');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Invalid email address.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with Entering Message only
    // it('Entering Message only', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="0"]');
    //     browser.setValue('input#email', '');
    //     browser.setValue('textarea#message', 'Great!');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Email and Subject Heading cannot be blank.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test without entering a message
    // it('Without entering a message', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="1"]');
    //     browser.setValue('input#email', 'test@test.com');
    //     browser.setValue('textarea#message', '');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Message cannot be blank.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with entering Heading and wrong email and a blank message
    // it('Entering Subject Heading, wrong email and blank address', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="1"]');
    //     browser.setValue('input#email', 'test');
    //     browser.setValue('textarea#message', '');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Please enter a valid email address and message.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with entering Heading, wrong email and a message
    // it('Entering Subject Heading, wrong email and message', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="1"]');
    //     browser.setValue('input#email', 'test');
    //     browser.setValue('textarea#message', 'Great!');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Invalid email address.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with entering Heading, empty email and a message
    // it('Entering Subject Heading, empty email and a message', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="1"]');
    //     browser.setValue('input#email', 'test');
    //     browser.setValue('textarea#message', 'Great!');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Email address cannot be blank.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with entering no Heading, valid email and a message
    // it('Entering no Heading, valid email and a message', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="0"]');
    //     browser.setValue('input#email', 'test@test.com');
    //     browser.setValue('textarea#message', 'Great!');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-danger', 5000);
    //     browser.verify.containsText('.alert.alert-danger', 'Subject Heading cannot be blank.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with entering all required fields correctly
    // it('Entering all required fields', function (browser) {
    //   try {
    //     browser.click('select[id="id_contact"] option[value="1"]');
    //     browser.setValue('input#email', 'test@test.com');
    //     browser.setValue('textarea#message', 'Great!');
    //     browser.click('button#submitMessage');
    //     browser.waitForElementVisible('.alert.alert-success', 5000);
    //     browser.verify.containsText('.alert.alert-success', 'Your message has been successfully sent to our team.');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    // // Test with Entering spaces only in the message field
    // it('Entering Spaces in the message field', function (browser) {
    //   try {
    //     browser.pause(2000);
    //     browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
    //     browser.click('select[id="id_contact"] option[value="1"]');
    //     browser.setValue('input#email', 'test@test.com');
    //     browser.setValue('textarea#message', '   ');
    //     browser.click('button#submitMessage');
    //     browser.verify.visible('.alert.alert-danger');
    //     browser.verify.containsText('.alert.alert-danger', 'Message cannot be blank.');
    //     browser.pause(2000);
    //     browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
    //   } catch (error) {
    //     console.error('Assertion failed:', error);
    //   }
    // });
  
    after(browser => browser.end());
  });
  