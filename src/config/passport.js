const LocalStrategy = require('passport-local').Strategy;
const User = require('../app/models/user');
module.exports = function (passport)
{
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});
	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});
//registro
	passport.use('local-signup', new LocalStrategy({
	    // by default, local strategy uses username and password, we will override with email
	    usernameField: 'user',
	    passwordField: 'password',
	    passReqToCallback : true // allows us to pass back the entire request to the callback
	  },
	  function (req, user, password, done) {
	    User.findOne({'local.user': user}, function (err, user) {
	      if (err) {
	        return done(err);
	      }
	      if (user) {
	        return done(null, false, req.flash('signupMessage', 'the user is already taken'));
	      } else {
	        var newUser = new User();
	        newUser.local.user = user;
	        newUser.local.password = newUser.generateHash(password);
	        newUser.save(function (err) {
	          if (err) { throw err; }
	          return done(null, newUser);
	        });
	      }
	    });
	  }));
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