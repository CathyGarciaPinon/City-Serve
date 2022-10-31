const Outreach = require('../models/outreach');

module.exports = {
    index,
    show,
    new: newOutreach, 
};

function index(req, res) {
    Outreach.find({}, function(err, outreaches) {
        res.render('outreaches/index', { outreaches, title: 'Outreach Requests' });
    });
};

function show(request, res) {
    Outreach.findById(req.params.id, function(err, outreach) {
        res.render('outreach/show', { title: 'Outreach Request Details', outreaches});
    });
};

function newOutreach(req, res) {
    res.render('outreaches/new');
};