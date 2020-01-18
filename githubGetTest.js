const axios = require('axios');
const config = require('./config.js')

let options = {
  // this is the url to the repos in github api
  url: `https://api.github.com/users/MarkVincentGo/repos`,
  headers: {
    'User-Agent': 'request',
    'Authorization': `token ${config.TOKEN}`
  }
};

axios.get(`https://api.github.com/users/octocat/repos`, {headers: options.headers})
  .then((response) => {
    var arrayOfNames = response.data.map((repo) => {
      return repo.name
    })
    console.log(arrayOfNames)
  })