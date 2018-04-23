const lunr = require('lunr')
const idx = lunr.Index.load(window.idx)
const search = document.getElementById('search')

const cards = Array.from(document.querySelectorAll('.Card'))
  .sort((a, b) => {
    const aId = parseInt(a.dataset.ref)
    const bId = parseInt(b.dataset.ref)

    if (aId < bId) {
      return -1
    }
    if (aId > bId) {
      return 1
    }

    return 0
  })

function update (display) {
  cards.forEach((c) => {
    if (display.indexOf(c.dataset.ref) >= 0) {
      c.classList.remove('dn')
      c.classList.add('flex')
    } else {
      c.classList.add('dn')
      c.classList.remove('flex')
    }
  })
}

if (search) {
  search.classList.remove('dn')
  const input = search.querySelector('input')

  input.addEventListener('keyup', () => {
    const search = input.value

    if (search === '') {
      cards.forEach((c) => c.classList.remove('dn'))
      return
    }

    try {
      update(idx.search(search).map(s => s.ref))
    } catch (e) {
      console.log(e)
    }
  })
}
