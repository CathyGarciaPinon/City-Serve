const Outreach = require('../models/outreach');
const Volunteer = require('../models/volunteer');

module.exports = {
    index,
    show,
    new: newOutreach,
    create,
    delete: deleteOutreach
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
    req.body.userId = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
    const outreach = new Outreach(req.body);
    outreach.save(function(err) {
        if (err) return res.redirect('/outreaches/new');

        res.redirect(`/outreaches/${outreach._id}`);
    });
}

function deleteOutreach(req, res) {
  Outreach.findOneAndDelete(
    // Ensue that the book was created by the logged in user
    {_id: req.params.id, userId: req.user._id}, function(err) {
      // Deleted book, so must redirect to index
      res.redirect('/outreaches');
    }
  );
}