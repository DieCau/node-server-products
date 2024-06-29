import mongoose from "mongoose";
import { CONNECTION_STRING } from "./config/config.js";

// REALIZO LA CONEXION A LA BD CON EL ODM MONGOOSE
mongoose.connect(CONNECTION_STRING);

// AGREGAR 2 listened
mongoose.connection.on("connected", () => {
    console.log("Conectado a la Base de Datos de MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log(error);    
});

// File se importa a index.js
