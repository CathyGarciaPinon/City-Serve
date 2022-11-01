const Volunteer = require('../models/volunteer');
const Outreach = require('../models/outreach');
const outreach = require('../models/outreach');

module.exports = {
    new: newVolunteer,
    create,
    addToRequest
};

function addToRequest(req, res) {
    Outreach.findById(req.params.id, function(err, movie) {
        outreach.cast.push(req.body.performerId);
        movie.save(function(err) {
            res.redirect(`/outreaches/${outreach._id}`);
        });
    });
}

function create(req, res) {
    Volunteer.create(req.body, function (err, volunteer) {
        res.redirect('/volunteer/new');
    });
}

function newVolunteer(req, res) {
    Volunteer.find({})
    .sort('name')
    .exec(function (err, volunteers) {
        res.render('volunteers/new', {
            title: 'Add Volunteer',
            volunteers
        });
    });
}