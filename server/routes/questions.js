const express = require('express')
const router = express.Router();
const { check } = require('express-validator')


const {
    getQuestions,
    getSingleQuestion,
    addQuestion,
    deleteQuestion,
    listByTags,
    listByUser,
    loadComments
} = require('../controllers/questions')



/**
 *    GET /questions/
 *    Fetch all the posts
 *    Private access only 
 */

 router.get('/', getQuestions)



 /**
  *     GET /questions/:id
  *     Fetch one question by id
  *    
  */
 router.get('/:id', getSingleQuestion)



/**
 *      GET /questions/tag/:tagname
 *      Fetch questons for a particular tag
 */
 router.get('/tag/:tagname', listByTags)




/**
 *      GET /questions/user/:username
 *      get all the questions posted by a particular user
 *      
 */
 router.get('/user/:username', listByUser)


/**
 *     POST /questions/
 *     create a question
 *    
 */
router.post('/', addQuestion)


 /**
  *    DELETE /questions/:id
  *    Delete a question by id 
  * 
  */
 router.delete('/:id', deleteQuestion)


 module.exports = router;