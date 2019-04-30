const fs = require('fs')
const { join } = require('path')
const yaml = require('node-yaml')
const { sortAbc, sortInv, slugify } = require('./utils')

const dir = join(__dirname, '../data')
const trimIfExists = (str) => str ? str.trim() : undefined

module.exports = fs.readdirSync(dir)
  .map(file => join(dir, file))
  .map(file => yaml.readSync(file))
  .map(file => {
    file.slug = slugify(file.title)
    file.type = 'category'

    file.content = file.content.map(({ title, description, ...meta }, i) => ({
      ...meta,
      title: trimIfExists(title),
      description: trimIfExists(description),
      category: file.slug,
      color: file.color,
      index: i
    }))

    let sort = (a, b) => sortAbc(a.title, b.title)

    if (file.slug === 'articles') {
      sort = (a, b) => sortInv(a.date, b.date)
    }

    file.content = file.content.sort(sort)
    return file
  })
  .sort((a, b) => sortAbc(a.title, b.title))
