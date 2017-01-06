const diffImage = require('./imageDiff')
const fs = require('fs')
const { argv } = require('yargs')
const { Builder } = require('selenium-webdriver')
const driver = new Builder()
  .forBrowser('chrome')
  .build()

driver.get(argv.url)
/* this is just the resolution of the screenshot i was diffing against */
driver.manage().window().setSize(1440, 776)
driver.then(() => {
  driver.takeScreenshot().then((data) => {
    driver.quit()
    const base64Data = data.replace(/^data:image\/png;base64,/, '')
    fs.writeFile('out.png', base64Data, 'base64', (err) => {
      if (err) throw new Error(err)
      diffImage('out.png')
    })
  })
})
