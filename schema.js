const mongoose = require('mongoose')

//Esquema Disco
const discoSchema = mongoose.Schema({
    titulo: {type: String, require: true},
    artista: {type: mongoose.Schema.Types.ObjectId, ref: "artista", require: true},
    anyo: {type: Number, require: true},
    genero: String,
    stock: {type: Number, require: true},
    formato: String,
})

const Disco = mongoose.model('disco', discoSchema,)

//Esquema Artista
const artistaSchema = mongoose.Schema({
    nombre: {type: String, require: true},
    genero: {type: String, require: true},
    fechaDeNacimiento: Date,
    nacionalidad: {type: String, require: true},
    nombreArtistico: String
})

const Artista = mongoose.model('artista', artistaSchema)


module.exports = {Artista, Disco} 