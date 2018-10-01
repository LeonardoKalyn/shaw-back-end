module.exports = (app) => {
  var users  = require('../controllers/usersController');

  app.route('/api/users')
    .get(users.getUsers)

};
