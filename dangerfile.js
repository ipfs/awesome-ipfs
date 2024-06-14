const { danger, markdown, fail, warn, message } = require('danger')
const awesomeBotResults = require('./ab-results-README.md-markdown-table.json')

const githubMetadata = danger.git.fileMatch('.github/**')
const readme = danger.git.fileMatch('README.md')

if (readme.edited && awesomeBotResults.error) {
  fail(awesomeBotResults.title)
  markdown(awesomeBotResults.message)
}

if (githubMetadata.edited) {
  message('Changes were made within the .github folder.')
}
