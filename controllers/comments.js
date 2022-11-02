const Outreach = require('../models/outreach');
const { estimatedDocumentCount } = require('../models/volunteer');

module.exports = {
    create,
    delete: deleteComment,
    edit,
    update
};

function update(req, res) {
  Outreach.findOne({'comments._id': req.params.id}, function(err, outreach) {
    const commentSubdoc = outreach.comments.id(req.params.id);
    if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/outreaches/${outreach._id}`);
    commentSubdoc.comment = req.body.comment;
    outreach.save(function(err) {
      res.redirect(`/outreaches/${outreach._id}`);
    });
  });
}


function edit(req, res) {
    Outreach.findOne({'comments._id': req.params.id}, function(err, outreach) {
      const comment = outreach.comments.id(req.params.id);
      console.log(comment);
      res.render('outreaches/edit', {comment, title:"edit comment"});
    });
  }


function deleteComment(req, res, next) {
    Outreach.findOne({
      'comments._id': req.params.id,
      'comments.user': req.user._id
    }).then(function(outreach) {
      if (!outreach) return res.redirect('/outreaches');
      outreach.comments.remove(req.params.id);
      outreach.save().then(function() {
        res.redirect(`/outreaches/${outreach._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }


function create(req, res) {
    Outreach.findById(req.params.id, function(err, outreach) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        outreach.comments.push(req.body);
        outreach.save(function(err) {
            res.redirect(`/outreaches/${outreach.id}`);    
        });
    });
};