const Outreach = require('../models/outreach');
const Volunteer = require('../models/volunteer');

module.exports = {
    index,
    show,
    new: newOutreach,
    create 
}

function index(req, res) {
    Outreach.find({}, function(err, outreaches) {
        res.render('outreaches/index', { outreaches, title: 'Outreach Requests' });
    });
}

function show(req, res) {
    Outreach.findById(req.params.id)
      .populate('volunteers')
      .exec(function(err, outreach) {
        Volunteer.find(
          {_id: {$nin: outreach.volunteers}},
          function(err, volunteers) {
            res.render('outreaches/show', {
              title: 'Outreach Detail',
              outreach,
              volunteers
            });
          }
        );
      });
  }

function newOutreach(req, res) {
    res.render('outreaches/new', { title: 'Add Outreach Request'});
}

function create(req, res) {
    const outreach = new Outreach(req.body);
    outreach.save(function(err) {
        if (err) return res.redirect('/outreaches/new');

        res.redirect(`/outreaches/{outreaches._id}`);
    });
}
