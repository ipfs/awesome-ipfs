const fs = require('fs')
const path = require('path')
const files = require('./data')
const readme = path.join(__dirname, '../README.md')
const template = path.join(__dirname, 'readme-template.md')
const { slugify, sortInv, sortAbc } = require('./utils')

const toc = files.map(cat => `- [${cat.title}](#${slugify(cat.title)})`).join('\n')

const sections = files.map(category => {
  let sort = (a, b) => sortAbc(a.title, b.title)

  if (category.title === 'Articles') {
    sort = (a, b) => sortInv(a.date, b.date)
  }

  const content = category.content.sort(sort).map(item => {
    let block = '- '
    let mainUrl = ''

    if (item.website) {
      mainUrl = item.website
    } else if (item.source) {
      mainUrl = item.source
    } else if (item.demo) {
      mainUrl = item.demo
    }

    if (item.date) block += item.date + ': '
    block += `[${item.title}](${mainUrl}) `
    if (item.description) block += `- ${item.description.trim()}`
    if (item.demo && mainUrl !== item.demo) {
      if (!item.description) block += '-'
      block += ` [Demo](${item.demo})`
    }
    if (item.source && mainUrl !== item.source) {
      block += ` [Source](${item.source})`
    }

    return block
  }).join('\n')

  return `## ${category.title}\n\n${content}`
}).join('\n\n')

fs.writeFileSync(readme, fs.readFileSync(template)
  .toString()
  .replace('#PLACEHOLDER_TOC#', toc)
  .replace('#PLACEHOLDER_CATEGORIES#', sections))
