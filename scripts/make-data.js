const lunr = require('lunr')
const fs = require('fs-extra')
const path = require('path')
const { slugify, capitalize, sortAbc } = require('./utils')

const dataDir = path.join(__dirname, '../src/data')
const contentDir = path.join(__dirname, '../src/content')
const indexesDir = path.join(__dirname, '../src/layouts/partials/indexes')

const processDataType = (data) => {
  const content = data.content.map((info, index) => {
    const { website, ...more } = info

    if (data.title === 'Videos' && website.includes('youtube')) {
      more.youtube = website.replace('https://www.youtube.com/watch?v=', '')
    }

    return {
      website: website,
      categories: [data.title.toLowerCase()],
      ...more
    }
  })

  delete data.content

  return {
    info: { ...data },
    content: content
  }
}

const writeContentFile = (data) => {
  const basename = slugify(data.title)
  const filename = path.join(contentDir, `${basename}.md`)

  fs.writeFileSync(filename, JSON.stringify(data))
}

const makeIndex = (data) => {
  const indexes = { 'index': [] }

  const checkField = (field, el) => {
    if (Array.isArray(el[field])) {
      el[field].forEach(t => {
        const key = `${field}_${t}`

        if (indexes[key]) {
          indexes[key].push(el.index)
        } else {
          indexes[key] = [el.index]
        }
      })
    }
  }

  data.forEach(el => {
    indexes.index.push(el.index)
    checkField('tags', el)
    checkField('categories', el)
  })

  data = data.map(({index, title, description = '', tags = [], categories = []}) => ({
    ref: index,
    data: `${title} ${description} ${tags.join(' ')} ${categories.join(' ')}`
  }))

  for (const index in indexes) {
    const idx = lunr(function () {
      this.ref('ref')
      this.field('data')

      indexes[index].map(i => data[i]).forEach(this.add.bind(this))
    })

    const file = path.join(indexesDir, index + '.html')
    const json = JSON.stringify(idx).replace(`'`, `\\'`)

    fs.writeFileSync(file, `<script>var idx = JSON.parse(\`${json}\`);</script>`)
  }
}

const process = () => {
  fs.ensureDirSync(dataDir)
  fs.ensureDirSync(contentDir)
  fs.ensureDirSync(indexesDir)
  fs.emptyDirSync(dataDir)
  fs.emptyDirSync(contentDir)
  fs.emptyDirSync(indexesDir)

  let data = []
  let types = []
  let typesObj = {}

  require('./data')
    .map(processDataType)
    .forEach(({info, content}) => {
      types.push(info)
      data.push(content)
    })

  data = data.reduce((a, v) => a.concat(v), [])
    .sort((a, b) => sortAbc(a.title, b.title))
    .map((v, i) => { v.index = i; return v })

  data.forEach(writeContentFile)
  makeIndex(data)

  types = types.map(t => {
    t.title = capitalize(t.title)
    return t
  }).sort((a, b) => {
    if (a.weight < b.weight) {
      return -1
    }

    if (a.weight > b.weight) {
      return 1
    }

    return 0
  }).forEach(type => {
    typesObj[type.title.toLowerCase()] = type
  })

  const pt = path.join(dataDir, 'categories.json')
  fs.writeFileSync(pt, JSON.stringify(typesObj))
}

process()
