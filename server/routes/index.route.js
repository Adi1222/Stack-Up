const questions = require('./questions')
const answers = require('./answers')
const users = require('./users')
const tags = require('./tags')
const comments = require('./comments')

const express = require('express')
const router = express.Router();

const {
    signup,
    login
} = require('../controllers/users')



router.use('/signup', sigup)
router.use('/login', login)
router.use('/questions', questions)
router.use('/answers', answers)
router.use('/users/', users)
router.use('/tags/', tags)
router.use('/comments/', comments)

module.exports = router;