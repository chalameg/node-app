var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/users')

const users = knex => {

  router.get('/', usersControllers.getAllUsers(knex))
  
  router.post('/', usersControllers.createUser(knex))

  return router
}

module.exports = users;
