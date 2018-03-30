const Pasantia = require("../models/pasantia");

async function create(req, res) {
  const pasantia = new Pasantia(req.body); 
  await pasantia.save();
  res.send(pasantia);
}

async function update(req, res) {
  res.send({});
}

async function profile(req, res) {
  const pasantia = await Pasantia.findOne({ _id: req.params.id });
  res.send(pasantia);
}

async function me(req, res) {
  res.send(req.pasantia);
}

async function destroy(req, res) {
  res.send({});
}

module.exports = { create, update, profile, destroy, me };