const puppeteer = require("puppeteer");

const goToSchedule = async () => {
  console.log(
    "\n =================== Initiate Program MarkG. ====================== \n"
  );

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  console.log("1_ Open Browser \n");
  try {
    await page.goto("https://www.deportick.com/", {
      waitUntil: "networkidle2",
    });
    console.log("2_ Navigation to deportick page...\n");

    // search div with class 'information'
    console.log("3_ After first main page load \n");
    const linkSelector = "div.information";
    await page.waitForSelector(linkSelector);
    console.log("4_ Find banner to go to ARvsPER\n");
    await page.click(linkSelector);

    console.log("5_ Click in the banner match \n");

    // await page.waitForNavigation({ waitUntil: "networkidle2" });

    const divSelector = "div.event-status";
    await page.waitForSelector(divSelector);
    const buttonSelector = "button";
    // await page.waitForSelector(buttonSelector);

    // Encuentra el botón con el texto específico
    const buttonTextVariants = [
      "comprar entrada",
      "empezar fila virtual",
      "iniciar fila virtual",
      "comenzar fila virtual",
      "conseguir entrada",
      "virtual",
      "fila",
      "ir a la fila virtual",
    ];
    // const divs = await page.$$(divSelector);

    // for (let div of divs) {
    //   const text = await page.evaluate((el) => el.innerText, div);
    //   console.log("texts==== ", text);

    //   if (buttonTextVariants.includes(text.toLowerCase())) {
    //     console.log("span finded with text:: ", text);
    //     await button.click();
    //     break;
    //   }
    // }
    const buttons = await page.$$(buttonSelector);
    console.log("6_ Finding buttons selectors  \n");
    console.log("7_ Buttons founded: ", buttons.length, "\n");

    for (let button of buttons) {
      const text = await page.evaluate((el) => el.innerText, button);
      console.log("Searching for button to queue....");

      if (buttonTextVariants.includes(text.toLowerCase())) {
        console.log("8_ Button finded with text: ", text, "\n");
        await button.click();
        console.log("9_ Click to enter the queue \n");
        break;
      }
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Cierra el navegador
    console.log(
      "\n =================== Finished Program MarkG. ====================== \n"
    );
    // await browser.close();
  }
};
(async () => {
  for (let i = 0; i < 1; i++) {
    goToSchedule();
  }
})();
