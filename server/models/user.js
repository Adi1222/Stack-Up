const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    created_at: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
    profilepic: {
        type: String,
        default: function() {
            return `https://secure.gravatar.com/avatar/${this._id}?s=85`;
        }
    }

})


//  Getters let you transform data in MongoDB into a more user friendly form
userSchema.set('toJSON', { getters: true })


// transform --> a transform function to apply to the resulting document before returning
// Only called when calling toJSON() or toObject()

//doc The mongoose document which is being converted
//ret The plain object representation which has been converted

userSchema.options.toJSON.transform = (doc, ret) => {
    const obj = {...ret};
    return obj;

}

module.exports = mongoose.model('User', userSchema)