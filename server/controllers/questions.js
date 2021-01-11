const { json } = require('body-parser');
const { body, validationResult } = require('express-validator');
const Question = require('../models/question')
const User = require('../models/user')


const getQuestions = async (req, res) => {

    try{

        const questions = await Question.find();
        res.json(questions)

    } catch(error) {

        console.log(error);
        return json.status(401)


    }

}

const getSingleQuestion = (req, res) => {



}

const addQuestion = async (req, res) => {

    try {
        const { title, body, tagname } = req.body;
        // const author = res.user.id;

        const question = await Question.create({
            title, body, tagname
        });

        res.status(201).json(question)



    } catch(error) {
        console.log(error);
        return res.json(500)
                  .json({'text': "ERROR!!!"})
    }

}

const deleteQuestion =  (req, res) => {

    try {

        Question.deleteOne({ _id: req.params.id}, function(err, questions) {
            if(err) {
                console.log(err);
                return res.status(err.code).json(err);
            }

            return res.status(204)
                      .json({ 'message': 'Question deleted successfully' })

        })

    } catch(error) {
        console.error(error);
        return res.status(500)
                  .json({'text':'Cannot Delete!!!'})

    }

}

const listByTags = async (req, res) => {

    try {

        const { tag } = req.params
        const questions = await Question.find({ tags: { $in: tag } })
        res.json(questions)

    } catch(error) {
        console.error(error)
        return res.json({ message: "ERROR" })
    }

}

const listByUser = async (req, res) => {

    try {

        const { username } = req.params
        const author = await User.findOne({ username })
        const questions = await Question.find({ author: author.id })
        res.json(questions);

    } catch(error) {
        console.error(error)
        return res.json({ message: "ERROR" })
    }

}

const loadComments = (req, res) => {

}


const validateQuestion = [
    body('title')
        .exists()
        .trim()
        .withMessage('is required')

        .notEmpty()
        .withMessage('cannot be blank')

        .isLength({ min: 5 })
        .withMessage('must be at least 5 characters long')

        .isLength({ max: 200 })
        .withMessage('must be at most 200 characters long'),

    body('body')
        .exists()
        .trim()
        .withMessage('is required')

        .isLength({ min: 10 })
        .withMessage('must be at least 10 characters long')

        .isLength({ max: 5000 })
        .withMessage('must be at most 5000 characters long'),
    
    body('tags')
        .exists()
        .withMessage('required')

];


module.exports = {
    getQuestions,
    getSingleQuestion,
    addQuestion,
    deleteQuestion,
    listByTags,
    listByUser,
    loadComments, 
    validateQuestion
}
