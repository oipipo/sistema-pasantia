const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
	user: String,
	password: String,
	nombre: String,
	apellido: String,
	cedula: String,
	email: String,
	carrera: String,
	celular: String,
	telefono: String,
	direccion: String
});
userSchema.methods.generateHash = function (password)
{
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = function(password)
{
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", userSchema);