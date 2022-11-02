const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    comment: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });




const outreachSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    location: {
        type: String,
        renum: ['Antioch', 'Berkeley', 'Concord', 'Oakland', 'Richmond'],
    },
    when: {
        type: Date,
        default: function() {
          return new Date().setFullYear(new Date().getFullYear() + 1)
        },
    },  
    volunteers: [{
        type: Schema.Types.ObjectId,
        ref: 'Volunteer'
    }],
    timestamps: {type: Boolean, default: true}
});


module.exports = mongoose.model('Outreach', outreachSchema)