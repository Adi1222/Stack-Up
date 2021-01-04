const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({

    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: false
    },

    body: { type: String, required: true },
    created: { type: Date, default: Date.now }

})


//  Getters let you transform data in MongoDB into a more user friendly form
commentSchema.set('toJSON', { getters: true })


// transform --> a transform function to apply to the resulting document before returning
// Only called when calling toJSON() or toObject()

//doc The mongoose document which is being converted
//ret The plain object representation which has been converted

commentSchema.options.toJSON.transform = (doc, ret) => {
    const obj = {...ret};
    return obj;
}


const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
    Comment,
    commentSchema
};