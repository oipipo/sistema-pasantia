const mongoose = require('mongoose');
const pasantiaSchema = new mongoose.Schema({
	cedula: String,
	tipo: String,
	institucion: String,
	area: String,
	titulo: String,
	academico: String,
	fechaInicio: Date,
	fechaFin: Date,
	duracion: Number
});

module.exports = mongoose.model("Pasantia", pasantiaSchema);