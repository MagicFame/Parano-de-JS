'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TaskSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  comment: { type: String, required: true },
  startState: { type: Date, required: true },
  endState: { type: Date, required: true },
  participants: { type: String, required: false },
  creator: { type: String, required: true },
  location: { type: String, required: false },
  relevance: { type: String, required: false },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
})

module.exports = mongoose.model('Task', TaskSchema)
