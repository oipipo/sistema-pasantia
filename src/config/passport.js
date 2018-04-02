const LocalStrategy = require('passport-local').Strategy;
const User = require('../app/models/user');
module.exports = function (passport)
{
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});
	passport.deserializeUser(function(id, done){
		done(null, user)
	});
//login
	passport.use('local-login', new LocalStrategy
	(
		{
		    usernameField: 'user',
		    passwordField: 'password',
		    passReqToCallback: true
		},
		function (req, user, password, done) {
		User.findOne({'local.user': user}, function (err, user) {
		  if (err) { return done(err); }
		  if (!user) {
		    return done(null, false, req.flash('loginMessage', 'No User found'))
		  }
		  if (!user.validPassword(password)) {
		    return done(null, false, req.flash('loginMessage', 'Wrong. password'));
		  }
		  return done(null, user);
		});
		}
	));
}