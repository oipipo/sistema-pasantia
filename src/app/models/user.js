const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
	user: String,
	password: {type: String, set:generateHash},
	nombre: String,
	apellido: String,
	cedula: String,
	email: String,
	carrera: String,
	celular: String,
	telefono: String,
	direccion: String
});
 function generateHash(password)
{
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = function(password)
{
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);