const express = require('express')
const router = express.Router();
const authen = require('../middlewares/authenticateToken')
const commentAuthentication = require('../middlewares/commentAuthentication')

const {

    deleteComment, addComment

} = require('../controllers/comments')




/**
 *  POST /comments/:question/:answer?
 *  add a comment to a question or to an answer
 * 
 */
 router.post('/:question/:answer?', [
      authen,
      commentAuthentication
  ], addComment)






/**
 *    DELETE /comments/:question/:comment
 *    delete a comment of a particular question
 *   Private access 
 */   
 router.delete('/:question/:comment', [
      authen,
      commentAuthentication
  ], deleteComment);


  
 /**
  *   DELETE /comments/:question/:answer/:comment
  *   Deleting a comment of a particular  answer of a particluar question 
  */
  router.delete('/:question/:answer/:comment', [
      authen,
      commentAuthentication
  ], deleteComment);

module.exports = router;