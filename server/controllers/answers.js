const { json } = require('body-parser');
const Question = require('../models/question')
const Answer = require('../models/answer')
const User = require('../models/user')


const getAnswers = async (req, res) => {

    try{

        const answers = await Question.find({ _id: req.params.qid }).populate("answers")
        if (! answers) return res.status(404).json({ message: "Answers not found!" })
        res.json(answers)

    } catch(error) {
        console.error(error)
        return res.status(400).json({ message: 'Invalid Question id.' })
    }

}

const addAnswer = async (req, res) => {

    try {

        const user_id = req.user.id;
        const { text } = req.body;

        const question = await Question.findById(req.params.qid)

        if (! question) {
            return res.json(404)
                       .json({ message: "Wrong Question id" })
        }

        const quest = await question.addAnswer(user_id, text);

        res.status(201).json(quest);


    } catch(error) {
        console.error(error)
        return res.status(400).json({ message: 'Invalid Question id.' })
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



module.exports = {
    getAnswers,
    addAnswer,
}
