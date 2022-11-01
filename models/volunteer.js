const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const volunteerSchema = new Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Volunteer', volunteerSchema);