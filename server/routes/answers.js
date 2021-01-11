const express = require('express')
const router = express.Router();
const authen = require('../middlewares/authenticateToken')
const answerAuthentication = require('../middlewares/answerAuthentication')

const {
    getAnswers,
    addAnswer,
    deleteAnswer,
    validateAnswer
} = require('../controllers/answers')


/**
 *   GET /answers/:qid
 *   Fetch all the answers for a particular question
 *   Private access
 * 
 */
 router.get('/:qid', getAnswers)




 /**
  *   POST /answers/:id
  *   Add an answer to a question 
  *   Private
  */  
  router.post('/', [
    authen,
    validateAnswer
  ] ,addAnswer)



/**
 *   DELETE /answers/:qid/:aid
 *   delete an answer of a particular question
 *   private access
 */
  router.delete('/:qid/:aid', [
    authen, 
    answerAuthentication
  ], deleteAnswer)




module.exports = router;