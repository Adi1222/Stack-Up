const { json } = require('body-parser');
const { body, validationResult } = require('express-validator');
const Question = require('../models/question')
const Answer = require('../models/answer').Answer
const User = require('../models/user')


const getAnswers = async (req, res) => {
    

    try{

        const answers = await Question.find({ _id: req.params.qid }).populate("answers")
        if (! answers) return res.status(404).json({ message: "Answers not found!" })
        return res.json(answers)

    } catch(error) {
        console.error(error)
        return res.status(400).json({ message: 'Invalid Question id.' })
    }

}

const addAnswer = async  (req, res) => {

    const result = validationResult(req);

    if (!result.isEmpty())
    {
        return res.status(422).json({ errors:  result.array()});
    }


    try {
        

        const { text } = req.body;
        const author = req.user.id;

    
        const ans = await Answer.create({
            text, author
        });

        res.status(201).json(ans)

        const question = await Question.find({ _id: req.params.qid})


       /* if (! question) {
            return res.json(404)
                       
        }

        const quest = await question.addAns(text);

        res.status(201).json(quest);*/

       

    } catch(error) {
        console.error(error)
        return res.status(400)
                  .json({ message: 'Invalid Question id.' })
    }

}



const deleteAnswer = async (req, res) => {


    try {

        const qid = req.params.qid;
        const aid = req.params.aid;

        const question = await Question.findById(qid)

        if (! question) {
            return res.json(404)
                       .json({ message: "Wrong Question id" })
        }
        
        const quest = await question.deleteAnswer(aid);

        res.status(201).json(quest);



    } catch(error) {
        console.error(error)
        return res.status(400).json({ message: 'ERROR' })
    }

}

const validateAnswer = [
    body('text')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 10 })
    .withMessage('must be at least 10 characters long')

    .isLength({ max: 10000 })
    .withMessage('must be at most 10000 characters long')
]

module.exports = {
    getAnswers,
    addAnswer,
    deleteAnswer,
    validateAnswer
}
