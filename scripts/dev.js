const chokidar = require('chokidar')
const path = require('path')
const runAll = require('npm-run-all')
const dataFolder = path.join(__dirname, '../data')
const srcFolder = path.join(__dirname, '../src')
const cssPath = path.join(__dirname, '../src/css')
const jsPath = path.join(__dirname, '../src/js')
const http = require('http')

const options = {
  stdout: process.stdout,
  stderr: process.stderr
}

const runHugo = () => {
  return runAll(['build:hugo'], options).catch(() => {})
}

const handler = (path) => {
  if (path.startsWith(dataFolder)) {
    runAll(['build:data'], options).then(runHugo)
  } else if (path.startsWith(cssPath)) {
    runAll(['build:css'], options).then(runHugo)
  } else if (path.startsWith(jsPath)) {
    runAll(['build:js'], options).then(runHugo)
  } else {
    runHugo()
  }
}

async function run () {
  console.log('Preparing fonts, css, js and data...')
  await runAll(['build:fonts', 'build:css', 'build:js', 'build:icons', 'build:data'], {
    stdout: process.stdout,
    stderr: process.stderr,
    parallel: true
  })

  await runHugo()

  console.log('Starting server...')

  const ecstatic = require('ecstatic')({
    root: `${__dirname}/../public`,
    showDir: true,
    autoIndex: true
  })

  const port = process.env.PORT || 8080
  http.createServer(ecstatic).listen(port)

  const watcher = chokidar.watch([dataFolder, srcFolder], {
    ignored: (string) => string.indexOf('src/content') !== -1 ||
      string.indexOf('src/data') !== -1 ||
      string.indexOf('src/resources') !== -1 ||
      string.indexOf('src/layouts/partials/indexes') !== -1 ||
      string.indexOf('src/static/fonts') !== -1 ||
      string.indexOf('src/static/app.css') !== -1 ||
      string.indexOf('src/static/app.js') !== -1,
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: true
  })

  watcher
    .on('ready', () => console.log('Listening on :' + port))
    .on('add', handler)
    .on('change', handler)
    .on('unlink', handler)
}

run()
