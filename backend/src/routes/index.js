const {Router}= require("express");
const reserva = require("../models/Reserva");
const router = Router();

//hacer reserva
router.post("/",async(req,res)=>{
    const {nombre,apellido,email,celular,dni,cantidad,horario} = req.body
    const nuevaReserva = new reserva({nombre,apellido,email,celular,dni,cantidad,horario})
    await nuevaReserva.save();
    res.json({status:"reserva creada"});
});

//buscar por email
router.get("/buscar-por-email", async (req,res)=>{
    const email = req.body
    const busqueda = await reserva.findOne(email);
    console.log(busqueda);
    res.json(busqueda);
});

//ver todas las reservas
router.get("/reservas",async(req,res)=>{
    const reservas = await reserva.find();
    res.json(reservas);
})


//borrar por _id
router.delete("/reservas", async(req,res)=>{
    const id = req.body._id;
    const borrado = await reserva.findByIdAndDelete(id);
    res.json({status:"borrado", borrado});
})

module.exports = router;