const fs = require('fs')
const path = require('path')
const yaml = require('node-yaml')
const { sortAbc } = require('./utils')
const dataDir = path.join(__dirname, '../data')

const trimIfExists = (str) => str ? str.trim() : undefined

const files = fs.readdirSync(dataDir)
  .map(file => path.join(dataDir, file))
  .map(file => yaml.readSync(file))
  .map(file => {
    file.content = file.content.map(({ title, description, ...file }) => ({
      title: trimIfExists(title),
      description: trimIfExists(description),
      ...file
    }))

    return file
  })
  .sort((a, b) => sortAbc(a.title, b.title))

module.exports = files
