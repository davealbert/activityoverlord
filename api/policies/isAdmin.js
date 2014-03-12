module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.User && req.session.User.admin) {
    return next();
  } else {
    var requireAdminError = [{name: 'requireAdminError', message: 'You must be an admin.'}];
    req.session.flash = {
        err: requireAdminError
    }
    res.redirect('/session/new');
    return;
  }
};

