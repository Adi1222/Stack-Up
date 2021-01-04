const Question = require('../models/question')
const Answer = require('../models/answer').Answer;






const addComment = async (req, res) => {

    try {

        const { id } = req.user;
        const { comment } = req.body;

        

        if (req.params.answer) {

            req.answer.addComment(id, comment);
            const question = await req.question.save();
            return res.status(201).json(question);

        }

        const question = await req.question.addComment(id, comment);
        return res.status(201).json(question);


    } catch(error) {
        console.error(error)
        return res.json({ message: "ERROR!!!" })
    }



}









const deleteComment = async (req, res) => {


    const  comment = req.params.comment;

    // now check if we are deleting the comment on an answer or a question

    try {

        if (req.params.answer) {

            req.answer.deleteComment(comment);
            const question = await req.question.save();
            return res.json(question);

        }

        const question =   await req.question.deleteComment(comment);
        return res.json(question);


    } catch(error) {
        console.error(error)
        return res.json({ message: "ERROR!!!" })
    }


}


module.exports = {
    deleteComment,
    addComment
}