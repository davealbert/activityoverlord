/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    'new': function  (req, res) {
       res.view();
    },

    create: function (req, res, next) {
        User.create( req.params.all(), function userCreated (err, user) {
            //if (err) { return next(err); }
            if (err) {
                console.log(err);

                req.session.flash = {
                    err: err
                }

                return res.redirect('/user/new');
            }

            res.redirect('/user/show/' + user.id);
        });
    },

    show:  function (req, res, next) {
       User.findOne(req.param('id'), function foundUser(err, user) {
          if (err) { return next(err); }
          if (!user) { return next(); }

          res.view({
            user: user
          });
       });
    }

};
