const { danger, markdown, fail, warn, message } = require('danger')
const awesomeBotResults = require('./ab-results-README.md-markdown-table.json')

// declare const danger: DangerDSLType
// declare function warn(message: string, file?: string, line?: number): void
// declare function fail(params: string): void
// declare function message(message: string): void

// This is a simple example of a Dangerfile.
// You can run this Dangerfile via `danger pr

const docs = danger.git.fileMatch('**/*.md')
const app = danger.git.fileMatch('src/**/*.ts')
const tests = danger.git.fileMatch('*/__tests__/*')
const yamlData = danger.git.fileMatch('data/**')
// const awesome_bot = danger.git.fileMatch('ab-results-README.md-markdown-table.json')

if (awesomeBotResults.error) {
  fail(awesomeBotResults.title)
  markdown(awesomeBotResults.message)
}

if (yamlData.edited) {
  message('YAML data files were edited')
}

if (docs.edited) {
  message('Thanks - We :heart: our [documentarians](http://www.writethedocs.org/)!')
}

if (app.modified && !tests.modified) {
  warn('You have app changes without tests.')
}
