const lunr = require('lunr')
const idx = lunr.Index.load(window.idx)
const search = document.getElementById('search')
const addApp = document.getElementById('addApp')

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

function randomizr () {
  const cards = document.querySelector('.CardContainer')
  for (var i = cards.children.length; i >= 0; i--) {
    cards.appendChild(cards.children[Math.random() * i | 0])
  }
}

function update (display) {
  cards.forEach((c) => {
    if (display.indexOf(c.dataset.ref) >= 0) {
      c.classList.remove('dn')
      c.classList.add('dib')
    } else {
      c.classList.add('dn')
      c.classList.remove('dib')
    }
  })
}

randomizr()

if (search) {
  search.classList.remove('dn')
  const input = search.querySelector('input')

  input.addEventListener('keyup', () => {
    let search = input.value

    if (search === '') {
      cards.forEach((c) => c.classList.remove('dn'))
      return
    }

    if (!search.endsWith('*')) {
      search = `${search} ${search}*`
    }

    try {
      update(idx.search(search).map(s => s.ref))
    } catch (e) {
      console.log(e)
    }
  })
}

if (addApp) {
  addApp.classList.remove('dn')
  const addAppForm = addApp.querySelector('form');
  const errorLabel = addAppForm.querySelector('#AddAppFormError');

  addAppForm.addEventListener('submit', (e) => {
    e.preventDefault();

    errorLabel.className = 'red dn';

    const name = addAppForm.querySelector('#AddAppFormName').value;
    const category = addAppForm.querySelector('#AddAppFormCategory').value;
    const description = addAppForm.querySelector('#AddAppFormDescription').value;
    const codeLink = addAppForm.querySelector('#AddAppFormCode').value;
    const websiteLink = addAppForm.querySelector('#AddAppFormWebsite').value;
    const picture = addAppForm.querySelector('#AddAppFormPicture').files[0];

    // errors
    if (!codeLink && !websiteLink) {
      errorLabel.innerText = 'Fill at least one link field';
      errorLabel.className = 'red';

      setTimeout(()  => { errorLabel.className = 'red dn'; }, 5000);
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("codeLink", codeLink);
    formData.append("websiteLink", websiteLink);
    formData.append("picture", picture);

    for (const pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    // when ready insert correct url
    //fetch(url, {method: "POST", body: formData});
    console.log('loading');
    for(let i = 0; i<1000000000; i++) {}

    errorLabel.innerText = 'Submitted Successfully';
    errorLabel.className = 'white';

    setTimeout(()  => { errorLabel.className = 'red dn'; }, 5000);
  })
}
