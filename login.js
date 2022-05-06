require("chromedriver");
const { Builder, By } = require("selenium-webdriver");
async function login() {
  //open Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();

  //go to localhost
  await driver.get("http://127.0.0.1:5500/task1/index.html");
  await driver
    .findElement(By.name("email"))
    .sendKeys("gauravtewari111@gmail.com");
  await driver.findElement(By.name("password")).sendKeys("12345678");
  await driver.findElement(By.name("loguser")).click();
}

login(); //call the function
