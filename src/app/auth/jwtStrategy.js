const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/user");


async function authenticate(userInfo, next) {
  try {
    let user = await User.findById(userInfo.id);
    return next(null, user);
  } catch (e) {
    // TODO ERROR!
    return next(e, null);
  }
}


var cookieExtractor = function(req) {

  var token = null;
  if (req && req.cookies) token = req.cookies['Authorization'];
  console.log("EXTRACTOR", token);
  return token;
};

module.exports = new Strategy(
  {
    secretOrKey: "Mota Rules",
    jwtFromRequest: cookieExtractor
  },
  authenticate
);
