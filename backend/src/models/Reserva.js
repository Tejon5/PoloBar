const {Schema, model} = require("mongoose");


const reserva = new Schema({
    nombre:String,
    apellido:String,
    email:String,
    celular:Number,
    dni:Number,
    cantidad:Number,
    horario:String,
},{
    timestamps:true
});

    /*
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    celular:{type:Number, required:true},
    dni:{type:Number, required:true},
    fechaReserva:{type:String, required:true},
    cantidadReserva:{type:Number, required:true},
    horarioReserva:{type:String, required:true},
    fechaNacimiento:{type:String, required:true}*/

module.exports =model("Reserva", reserva)