$(document).ready(function(){
  start();
});

const descriptions = [
  {
    text: '<p>Chairul is trying his best <br /> :)</p>'
  },
  {
    text: '<p>Chairul is a marine biologist by training and software engineer by trade</p>'
  },
  {
    text: `<p>
    During the day, Chairul is a marine biologist with special interest in coral reefs and ecological restoration.
    During the night, Chairul is a software engineer with special interest in virtual economy.
    </p>`
  },
  {
    text: `<p>
    Chairul is a marine biologist who loves programming. Chairul is also a software engineer who loves environment.
    During the night, Chairul is a software engineer with special interest in virtual economy
    </p>`
  },
];

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
    description: 'App where users can see & search current astronomy photos curated by NASA',
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

const start = () => {
    $("#portfolioCards").empty();
    portfolios.forEach((el, idx) => {
    const { name, description, stacks, url, image } = el;
    console.log(idx)
    $("#portfolioCards").append(`
    <div class="card my-3">
      <img src="${image || 'assets/images/Hacktiv8_verify.png'}" class="card-img-top" alt="${name}">
      <div class="card-body">
        <a href="${url}" target='_blank' rel='noopener noreferrer'>
          <h5 class="card-title">
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
