const User = require("../models/user");

async function create(req, res) {
  const user = new User(req.body); // {user:"usuario", password:"1234"}
  await user.save();
  res.send(user);
}

async function update(req, res) {
  res.send({});
}

async function profile(req, res) {
  const user = await User.findOne({ _id: req.params.id });
  res.send(user);
}

async function me(req, res) {
  //const user = await User.findOne({ _id: req.user._id });
  res.send(req.user);
}

async function destroy(req, res) {
  res.send({});
}

module.exports = { create, update, profile, destroy, me };
