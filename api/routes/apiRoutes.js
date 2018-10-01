module.exports = (app) => {
  var users  = require('../controllers/usersController');

  app.route('/api/users')
    .get(users.getUsers);
  
  app.route('/api/users/:username/details')
    .get(users.getUser);

  app.route('/api/users/:username/repos')
    .get(users.getRepos);

};
