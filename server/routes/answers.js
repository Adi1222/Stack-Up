const express = require('express')
const router = express.Router();
const { check } = require('express-validator')

const {
    getAnswers,
    addAnswer,
    deleteAnswer
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
  router.post('/', addAnswer)



/**
 *   DELETE /answers/:qid/:aid
 *   delete an answer of a particular question
 *   private access
 */
  router.delete('/:qid/:aid', deleteAnswer)




module.exports = router;