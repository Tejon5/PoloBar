import React,{useState} from "react";
import "./Reserva.css";

const Reserva = ()=>{

    const[nombre,setNombre]=useState("");
    const[apellido,setApellido]=useState("");
    const[email,setEmail]=useState("");
    const[celular,setCelular]=useState("");
    const[documento, setDocumento]=useState("");
    const[reserva, setReserva]=useState("");
    const[cantidad, setCantidad]=useState("");

    return(
        <form className="form col-9 m-3" >
            <div className="form-group m-2 col-6 ">
                <label className="form-label">Nombre</label>
                <input className="form-control" type="text" id="nombre" name="nombre" placeholder="Nombre"  required></input>
            </div>
            <div className="form-group m-2 col-6">
                <label className="form-label">Apellido</label>
                <input className="form-control" type="text" id="apellido" name="apellido" placeholder="Apellido" required></input>
            </div>
            <div className="form-group m-2 col-6">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" id="email" name="email" placeholder="Email" required></input>
            </div>
            <div className="form-group m-2 col-6">
                <label className="form-label">Numero de Celular</label>
                <input className="form-control" type="text" id="celNum" name="celNum" placeholder="Ej: 1510101010" maxLength="10" required></input>
            </div>
            <div className="form-group m-2 col-6">
                <label className="form-label">DNI / Pasaporte</label>
                <input className="form-control" type="text" id="idnumber" name="idnumber" placeholder="DNI/Pasaporte" required></input>
            </div>
            <div className="form-group m-2 col-6">
                <label className="form-label">Fecha de Reserva</label>
                <input className="form-control" type="date" id="date" name="date" min="2021-06-14" max="2021-12-31" required></input>
            </div>
            <div className="form-group m-2 col-6">
                <label className="form-label">Cantidad para Reserva</label>
                <input className="form-control" type="number" name="reserva" min="1" max="10" required></input>
            </div>

            <button className="btn btn-dark col-6" type="submit">Reservar</button>
        </form>

    )
}

export default Reserva;