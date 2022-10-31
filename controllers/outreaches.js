const Outreach = require('../models/outreach');

module.exports = {
    index,
 
};

function index(req, res) {
    Outreach.find({}, function(err, flights) {
        res.render('outreaches/index', { outreaches });
    });
}
