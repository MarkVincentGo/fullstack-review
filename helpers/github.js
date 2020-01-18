const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    // this is the url to the repos in github api
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, response, body) => {
    if (err) {
      console.log(err, null)
    } else {
      callback(null, {res: response.statusCode, body: body})
      //console.log(body)
    }
  })

}


module.exports.getReposByUsername = getReposByUsername;