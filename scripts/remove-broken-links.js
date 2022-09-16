/**
 * This file assumes that awesome_bot has already been ran.
 */
const markdownTable = require('../ab-results-README.md-markdown-table.json')
const fs = require('fs').promises
const { join } = require('path')

const dir = join(__dirname, '../data')

if (markdownTable.error) {
  const brokenLinks = require('../ab-results-README.md-filtered.json').map((resultsData) => resultsData.link);
  (async () => {
    const files = (await fs.readdir(dir)).map(file => join(dir, file))

    for await (const filePath of files) {
      let fileContents = await fs.readFile(filePath, 'utf8')
      brokenLinks.forEach((brokenLink) => {
        console.log('Searching for "' + brokenLink + '" in ' + filePath)
        const regex = new RegExp(brokenLink, 'g')
        if (fileContents.match(regex)) {
          fileContents = fileContents.replace(regex, '')
          console.log('Removed "' + brokenLink + '" from ' + filePath)
        }
      })
      await fs.writeFile(filePath, fileContents, 'utf8')
    }
  })()
} else {
  console.log('No errors reported by awesome_bot.')
}
