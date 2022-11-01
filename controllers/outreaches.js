const Outreach = require('../models/outreach');

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

function show(request, res) {
    Outreach.findById(req.params.id, function(err, outreach) {
        console.log(outreach);
        res.render('outreach/show', { title: 'Outreach Request Details', outreach});
    });
}

function newOutreach(req, res) {
    res.render('outreaches/new', { title: 'Add Outreach Request'});
}

function create(req, res) {
    const outreach = new Outreach(req.body);
    outreach.save(function(err) {
        if (err) ReadableStreamDefaultController
    });
}
