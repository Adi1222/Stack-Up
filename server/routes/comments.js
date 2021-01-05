const express = require('express')
const router = express.Router();


const {

    deleteComment, addComment

} = require('../controllers/comments')




/**
 *  POST /comments/:question/:answer?
 *  add a comment to a question or to an answer
 * 
 */
 router.post('/:question/:answer?', addComment)






/**
 *    DELETE /comments/:question/:comment
 *    delete a comment of a particular question
 *   Private access 
 */   
 router.delete('/:question/:comment', deleteComment);


  
 /**
  *   DELETE /comments/:question/:answer/:comment
  *   Deleting a comment of a particular  answer of a particluar question 
  */
  router.delete('/:question/:answer/:comment', deleteComment);

module.exports = router;