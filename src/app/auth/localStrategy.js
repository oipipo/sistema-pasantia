const LocalStrategy = require("passport-local");
const User = require("../models/user");

module.exports = new LocalStrategy(
  {
    usernameField: "user",
    passwordField: "password",
    session: false
  },
  authenticate
);

async function authenticate(username, password, done) {
  console.log("Login Params",username, password)
  let user = await User.findOne({ user: username });
  if(!user) return done(null, false);
  if (!user.password) return done(null, false);
  if (!user || !user.validatePassword(password)) return done(null, false);
  return done(null, user);
}
