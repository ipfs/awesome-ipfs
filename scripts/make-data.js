const lunr = require('lunr')
const fs = require('fs-extra')
const { join } = require('path')

function getData () {
  const data = require('./data')

  data.push({
    title: 'Awesome IPFS',
    slug: '_index',
    content: data
      .reduce((arr, cat) => arr.concat(cat.content), [])
      .map((el, i) => ({
        ...el,
        index: i
      }))
  })

  data.forEach(makeIndex)
  return data
}

function makeIndex (category) {
  const data = category.content.map(({ index, title, description = '', tags = [], category = '' }) => ({
    ref: index,
    data: `${title} ${description} ${tags.join(' ')} ${category}`
  }))

  category.index = lunr(function () {
    this.ref('ref')
    this.field('data')
    data.forEach(this.add.bind(this))
  })
}

const process = () => {
  const dir = join(__dirname, '../src/content')
  fs.ensureDirSync(dir)
  fs.emptyDirSync(dir)

  const data = getData()

  for (const { index, slug, ...meta } of data) {
    const filename = join(dir, slug + '.md')
    fs.writeFileSync(filename, `${JSON.stringify(meta)}
<script>var idx = JSON.parse(\`${JSON.stringify(index).replace(`'`, `\\'`)}\`);</script>`)
  }
}

process()
