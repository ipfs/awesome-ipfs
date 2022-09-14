const { danger, markdown, fail, warn, message } = require('danger')
const awesomeBotResults = require('./ab-results-README.md-markdown-table.json')

const githubMetadata = danger.git.fileMatch('.github/**')
const yamlData = danger.git.fileMatch('data/**')
const scripts = danger.git.fileMatch('scripts/**')
const src = danger.git.fileMatch('src/**')

if (githubMetadata.edited) {
  message('Changes were made within the .github folder.')
}

if (yamlData.edited) {
  message('YAML data files were edited.')
  /**
   * Only display awesomeBot results if the data yaml used to generate the readme have been modified.
   */
}
if (awesomeBotResults.error) {
  fail(awesomeBotResults.title)
  markdown(awesomeBotResults.message)
}

if (scripts.edited) {
  warn('Changes were made to the scripts folder.')
}

if (src.edited) {
  warn('Changes were made to the src folder.')
}
