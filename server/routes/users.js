const express = require('express');
const router = express.Router();

const {

    getUsers,
    getSingleUser

} = require('../controllers/users')


/**
 *   GET /users
 *   fetch all the users
 *   Private
 */
 router.get('/', getUsers);


 /**
  *   /users/:id
  *   Fetch a particular user 
  *   Private access
  */
  router.get('/:id', getSingleUser)



  module.exports = router;