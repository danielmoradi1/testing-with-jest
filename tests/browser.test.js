const { Builder, By, until } = require("selenium-webdriver");
require("geckodriver");

// Filen som ska testas
const fileUnderTest =
  "file://" + __dirname.replace(/ /g, "%20") + "/../dist/index.html";
const defaultTimeout = 10000;
// Skapar en ny WebDriver-instans för Firefox
let driver;
jest.setTimeout(1000 * 60 * 5); 

// Funktionen körs innan testerna för att starta Firefox
beforeAll(async () => {
  console.log(fileUnderTest);
  driver = await new Builder().forBrowser("firefox").build();
  await driver.get(fileUnderTest);
});

// Funktionen körs efter testerna för att stänga Firefox
afterAll(async () => {
  await driver.quit();
}, defaultTimeout);

// Testar om att lägga till ett element på stacken uppdaterar visningen
test("Pushing an item onto the stack updates the display", async () => {
  let pushButton = await driver.findElement(By.id("push"));
  await pushButton.click();

  let prompt = await driver.switchTo().alert();
  await prompt.sendKeys("Apple");
  await prompt.accept();
  // Här hämtar vi texten från elementet som visar stacken
  let stackDisplay = await driver.findElement(By.id("top_of_stack")).getText();
  expect(stackDisplay).toEqual("Apple");
});
