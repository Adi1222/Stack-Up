const questions = require('./questions')
const answers = require('./answers')
const users = require('./users')
const tags = require('./tags')
const comments = require('./comments')

const express = require('express')
const router = express.Router();

const {
    signup,
    login,
    validateUser
} = require('../controllers/users')



router.post('/signup', validateUser, signup);
router.post('/login', validateUser ,login);
router.use('/questions', questions)
router.use('/answers', answers)
router.use('/users/', users)
router.use('/tags/', tags)
router.use('/comments/', comments)

module.exports = router;