const express = require('express');
const { route } = require('./users');
const router = express.Router();


const {
    getTags,
    searchTags

} = require('../controllers/tags')



/**
 *   GET /tags
 *   Fetch all the tags
 *   Private acces 
 */
 router.get('/', getTags);



 /**
  *   GET /tags/:tagname
  *   Fetch by specified tag
  *   Private access
  */  
  router.get('/:tagname', searchTags);





module.exports = router;