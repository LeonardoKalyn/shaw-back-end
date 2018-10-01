const baseUrl = require('../constants/githubApi.json').baseUrl;
const got = require('got');

exports.getUsers = (req, res) => {
  got(`${baseUrl}/users?since=${req.query.since}`, { json: true }).then(response => {
    res.json(response.body);
  }).catch(error => {
    res.send( error.message ? error.message : error );
  });
};

exports.getUser = (req, res) => {
  got(`${baseUrl}/users/${req.username}`, { json: true }).then(response => {
    res.json(response.body);
  }).catch(error => {
    res.send( error.message ? error.message : error );
  });
};

exports.getRepos = (req, res) => {
  got(`${baseUrl}/users/${req.username}/repos`, { json: true }).then(response => {
    res.json(response.body);
  }).catch(error => {
    res.send( error.message ? error.message : error );
  });
};
