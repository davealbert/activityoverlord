module.exports = function(req, res, next){
    var sessionUserMatchesID = req.session.User.id === req.param('id');
    var isAdmin = req.session.User.admin;

    if (!(sessionUserMatchesID || isAdmin)) {
        var noRightsError =  [{name: 'noRights', message: 'You must be an admin'}];
        req.session.flash = {
            err: noRightsError
        };
        res.redirect('/session/new');
        return;
    }

    next();
};
