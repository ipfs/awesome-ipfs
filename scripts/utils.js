const sort = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

const sortInv = (a, b) => -sort(a, b)

const sortAbc = (a, b) => {
  a = a.toLowerCase()
  b = b.toLowerCase()
  return sort(a, b)
}

const slugify = (text) => text.toString()
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/, '')

module.exports = {
  sort,
  sortInv,
  sortAbc,
  slugify
}
