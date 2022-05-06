require("chromedriver");
const { Builder, By } = require("selenium-webdriver");
async function signUp() {
  //open Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();

  //go to local host
  await driver.get("http://127.0.0.1:5500/task1/index.html");
  await driver.findElement(By.name("name")).sendKeys("Gaurav Tewari");
  await driver.findElement(By.name("mobile")).sendKeys("8192838078");
  await driver.findElement(By.name("pass")).sendKeys("123455678");
  await driver.findElement(By.name("date")).sendKeys("23/03/2001");
  await driver.findElement(By.name("male")).click();
  await driver.findElement(By.name("signUp")).click();
}

signUp(); //call the function
