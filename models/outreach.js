const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
    timestamps: {type: Boolean, default: true}
});


module.exports = mongoose.model('Outreach', outreachSchema)