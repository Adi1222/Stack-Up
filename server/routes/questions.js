const express = require('express')
const router = express.Router();
const authen = require('../middlewares/authenticateToken')
const questionAuthentication = require('../middlewares/questionAuthentication')


const {
    getQuestions,
    getSingleQuestion,
    addQuestion,
    deleteQuestion,
    listByTags,
    listByUser,
    loadComments,
    validateQuestion
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
router.post('/',
    [ 
        authen,
        validateQuestion

    ], addQuestion)


 /**
  *    DELETE /questions/:id
  *    Delete a question by id 
  * 
  */
 router.delete('/:id',
    [
        authen,
        questionAuthentication

    ], deleteQuestion)


 module.exports = router;