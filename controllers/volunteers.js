const Volunteer = require('../models/volunteer');
const Outreach = require('../models/outreach');


module.exports = {
    new: newVolunteer,
    create,
    addToRequest
};

function addToRequest(req, res) {
    Outreach.findById(req.params.id).populate('volunteers').exec( function(err, outreach) {
        outreach.volunteers.push(req.body.volunteerId);
        outreach.save(function(err) {
            res.redirect(`/outreaches/${outreach._id}`);
        });
    });
}

function create(req, res) {
    Volunteer.create(req.body, function (err, volunteer) {
        console.log(err)
        res.redirect('/volunteers/new');
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