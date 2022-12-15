const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');
const { ObjectId } = require('bson');


const reactionSchema = new Schema({
    reactionId: {
        type: ObjectId,
        default: new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const thoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        reqired: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

const Thoughts = model('thought', thoughtSchema);

module.exports = Thoughts