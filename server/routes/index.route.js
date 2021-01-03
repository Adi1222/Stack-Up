const questions = require('./questions')
const answers = require('./answers')
const users = require('./users')

const express = require('express')
const router = express.Router();




router.use('/questions', questions)
router.use('/answers', answers)
router.use('/users/', users)

module.exports = router;