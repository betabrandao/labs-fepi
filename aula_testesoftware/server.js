const {Builder, By, Key} = require('selenium-webdriver');

(async function teste() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.google.com/');
  } finnaly {
    
  }
  
})();
