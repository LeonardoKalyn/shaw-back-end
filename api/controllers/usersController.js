const baseUrl = require('../constants/githubApi.json').baseUrl;
const got = require('got');

exports.getUsers = (req, res) => {
  got(`${baseUrl}/users?since=${req.query.since}`, { json: true }).then(response => {
    res.json(response.body);
  }).catch(error => {
    res.send( error.message ? error.message : error );
  });
};
