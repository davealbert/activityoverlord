/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  console.log('isAuthenticated');
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.User) {
    return next();
  } else {
     //console.log('not logged in');
    //var requiredLoginError = [{name: 'requireLogin', message: 'You must be signed in.'}];
    //req.session.flash = {
        //err: requiredLoginError
    //}
    //return res.redirect('/session/new');
    res.send(403);
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  //return res.forbidden('You are not permitted to perform this action.');
};
