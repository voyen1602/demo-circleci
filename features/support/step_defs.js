module.exports = function() {

  this.Given(/^I have visited Demo page$/, function () {
    browser.url('http://localhost:3000');
  });

  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    browser.setValue('input[name="q"]', searchTerm);
    browser.keys(['Enter']);
  });

  this.Then(/^I see "([^"]*)"$/, function (searchTerm) {
    expect(browser.getText('h3')).toEqual(searchTerm);
  });

  this.When(/^I fill name is "([^"]*)"$/, function (name) {
    browser.setValue('input[name="name"]', name);
  });

  this.When(/^I fill quote is "([^"]*)"$/, function (quote) {
    browser.setValue('input[name="quote"]', quote);
  });

  this.When(/^I submit to save data$/, function () {
    browser.click('button');
  });

  this.Then(/^I see "([^"]*)" and "([^"]*)" were input before$/, function (name,quote) {
    var span = browser.getText('span');
    console.log(span);
    expect(span[span.length-2]).toEqual(name);
    expect(span[span.length-1]).toEqual(quote);
  });

}