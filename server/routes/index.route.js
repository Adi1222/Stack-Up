const questions = require('./questions')
const answers = require('./answers')

const express = require('express')
const router = express.Router();




router.use('/questions', questions)
router.use('/answers', answers)

module.exports = router;