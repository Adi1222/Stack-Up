const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = require('./comment').commentSchema;
const answerSchema = require('./answer').answerSchema;

const questionSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },

    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: [{ type: String, required: true }],
    score: { type: Number, default: 0 },
    comments: [commentSchema],
    //answers: [answerSchema],
    answers: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Answer'
      }],
    created_at: { type: Date, default: Date.now },
    views: { type: Number, default: 0 }
})

//  Getters let you transform data in MongoDB into a more user friendly form
questionSchema.set('toJSON', { getters: true })


// transform --> a transform function to apply to the resulting document before returning
// Only called when calling toJSON() or toObject()

//doc The mongoose document which is being converted
//ret The plain object representation which has been converted

questionSchema.options.toJSON.transform = (doc, ret) => {
    const obj = {...ret};
    delete obj.__v;
    return obj;

}



/**
 * Implementing instance methods 
 */


questionSchema.methods = {

    addComment: function(author, body) {
        this.comments.push({ author, body });
        return this.save() // saving the instance i.e the document
    },

    deleteComment: function(id) {

        this.model('Question').comments.findOne({ _id: id}).exec(function(err, commment) {
            if(err) {
                throw new Error('Comment not found');
            }
            else {
                if(comment) {
                    comment.remove();
                    return this.save();
                }
                else {
                    throw new Error('Comment not found');
                }
            }
        })
    },


    addAnswer: function(author, body) {
        this.answers.push({ author, body });
        return this.save();
    },


    deleteAnswer: function(id) {

        this.model('Question').answers.findOne({ _id: id }).exec(function(err, answer) {
            if(err) {
                throw new Error('Answer not found');
            }
            else {
                if(answer) {
                    answer.remove();
                    return this.save();
                }
                else {
                    throw new Error('Answer not found');
                }
            }
        })
    }

};








module.exports = mongoose.model('Question', questionSchema);