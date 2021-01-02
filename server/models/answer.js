const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = require('./comment').commentSchema;

const answerSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },

    created_at: { type: Date, default: Date.now },
    text: { type: String, required: true },
    score: { type: Number, default: 0 },
    comments: [commentSchema] 
})

//  Getters let you transform data in MongoDB into a more user friendly form
answerSchema.set('toJSON', { getters: true });


// transform --> a transform function to apply to the resulting document before returning
// Only called when calling toJSON() or toObject()






/* Implementing instance method */

answerSchema.methods = {


    addComment: function(author, body) {
        this.comments.push({ author, body })
        return this.save();
    },

    deleteComment: function(id) {
        this.model('Answer').comments.findOne({ _id: id}).exec(function(err, commment) {
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
    }


}


const Answer = mongoose.model('Answer', answerSchema)

module.exports = {
    Answer, 
    answerSchema
};
