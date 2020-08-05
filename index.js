$(document).ready(function(){
  setupTrident();
  showOff();
});

// describeYourself();
const descriptions = [
  {
    text: '<p>Chairul is trying his best :)</p>'
  },
  {
    text: '<p><small>2</small> <br />Chairul is a marine biologist by training and software engineer by trade</p>'
  },
  {
    text: `<p>
    <small>3</small> <br />
    During the day, Chairul is a marine biologist with special interest in coral reefs and ecological restoration. <br />
    During the night, Chairul is a software engineer with special interest in virtual economy.
    </p>`
  },
  {
    text: `<p>
    <small>4</small> <br />
    ... sorry currently unfinished ... <br />
    please be patient. come back next week and there will be something new! <br />
    in the meanwhile, you can check out my CV just under the website title <br />
    cheers ;)
    </p>`
  },
  {
    text: `<p>
    <small>5</small> <br />
    ... sorry currently unfinished ... <br />
    please be patient. come back next week and there will be something new! <br />
    in the meanwhile, you can check out my CV just under the website title <br />
    cheers <br >
    ;)
    </p>`
  },
  {
    text: `<p>
    <small>6</small> <br />
    ... sorry currently unfinished ... <br />
    please be patient. come back next week and there will be something new! <br />
    in the meanwhile, you can check out my CV just under the website title <br />
    cheers <br />
    ;) <br />
    ...
    </p>`
  },
  {
    text: `<p>
    <small>longest</small> <br />
    ... sorry currently unfinished ... <br />
    please be patient. come back next week and there will be something new! <br />
    in the meanwhile, you can check out my CV just under the website title <br />
    cheers <br />
    ;) <br />
    ... <br />
    enough?
    </p>`
  }
];

let trident1, trident2, trident3, trident4, trident5, trident6, trident7;

const setupTrident = () => {
  descriptions.forEach(({ text }, idx) => {
    if (idx === 0) {
      trident1 = buildTrident(idx, text)
    } else if (idx === 1) {
      trident2 = buildTrident(idx, text)
     }else if (idx === 2) {
      trident3 = buildTrident(idx, text)
    } else if (idx === 3) {
      trident4 = buildTrident(idx, text)
    } else if (idx === 4) {
      trident5 = buildTrident(idx, text)
    } else if (idx === 5) {
      trident6 = buildTrident(idx, text)
    } else if (idx === 6) {
      trident7 = buildTrident(idx, text)
    }
  });
};

const buildTrident = (idx, text) => {
  return $(`#poseidon${ idx + 1 }`).click(function () {
    $("#poseidon1").removeClass("active");
    $("#poseidon1").attr("aria-pressed",false);
    $("#description").empty();
    $('#description').append(
      text
    );
  });
};



// showOff();
const portfolios = [
  {
    name: 'eth.or.id',
    description: 'Official website of Yayasan Ethereum Blockchain Indonesia',
    stacks: ['React', 'Grommet', 'Node', 'Netlify'],
    url: 'https://eth.or.id/',
    image: 'assets/images/scr_eth.or.id.png'
  },
  {
    name: 'Kuinstor',
    description: 'Fashion Commerce website with passwordless login',
    stacks: ['Vue', 'VueX', 'Express', 'Postgres', 'Sequelize', 'Node', 'Heroku', 'Firebase', 'Magic'],
    url: 'https://magicstor.web.app/',
    image: 'assets/images/scr_magicstor.png'
  },
  {
    name: 'Tataplangit',
    description: 'App where users can see & search current astronomy photos curated by <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer">NASA</a>',
    stacks: ['React', 'Redux', 'Express', 'Heroku', 'Firebase'],
    url: 'https://tataplangit.web.app/',
    image: 'assets/images/scr_tataplangit.png'
  },
  {
    name: 'Saguku',
    description: 'Sudoku Puzzle React Native Mobile App built with expo',
    stacks: ['React Native', 'Redux', 'Expo'],
    url: 'https://expo.io/@chairulakmal/saguku',
    image: 'assets/images/scr_saguku.png'
  },
  {
    name: 'Gamvangan',
    description: 'Kanban Board web app where teams or individual can organize their tasks',
    stacks: ['Vue', 'VueX', 'Express', 'Postgres', 'Sequelize', 'Node', 'Heroku', 'Firebase'],
    url: 'https://gamvangan.web.app/',
    image: 'assets/images/scr_gamvangan.png'
  },
  {
    name: 'Entertainme',
    description: 'Entertainment website where users can check out current movies or series',
    stacks: ['React', 'Express', 'Mongo', 'Apollo Client', 'Node', 'Apollo Server', 'AWS EC2 & S3'],
    url: 'http://muvinseries.s3-website-ap-southeast-1.amazonaws.com/',
    image: 'assets/images/scr_entertainme.png'
  }
];

const showOff = () => {
    $("#portfolioCards").empty();
    portfolios.forEach((el, idx) => {
      const { name, description, stacks, url, image } = el;
      $("#portfolioCards").append(`
      <div class="card my-3">
        <a href="${url}" target='_blank' rel='noopener noreferrer'>
          <img src="${image || 'assets/images/Hacktiv8_verify.png'}" class="card-img-top" alt="${name}">
        </a>
        <div class="card-body">
          <a href="${url}" target='_blank' rel='noopener noreferrer'>
            <h5 class="card-title text-center">
              ${name}
            </h5>
          </a>
          <p class="card-text">${description}</p>
        </div>
        <div class="card-footer" id="${idx}Stacks">
        </div>
      </div>
      `);
      stacks.forEach(tech => {
        $(`#${idx}Stacks`).append(`
          <span class="badge badge-success">${tech}</span>
        `)
      });
  });
};
