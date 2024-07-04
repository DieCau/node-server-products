import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config/config.js";
import "./db.js"
import ProductRoutes from "./routes/product.Routes.js";
import UserRoutes from "./routes/user.Routes.js";

const app = express();

const corsOptions = {
    origin: "*",
    optionSucessStatus: 200
}

// EXPRESS.JSON() convierte el req.body en formato JSON u objeto JS
app.use(express.json());

// CORS habilita otros dominios para comunicarse entre back y front
app.use(cors(corsOptions));

// MORGAN muestra las peticiones en consola y "dev" es un formato sencillo de muestra
app.use(morgan("dev"));

// Utilizamos la ruta y el controller de file "ProductRoutes"
app.use(ProductRoutes);

// Utilizamos la ruta y el controller de file "UserRoutes"
app.use(UserRoutes);

// LISTEN escucha en el Puerto asignado los cambios del servidor
app.listen(PORT, async() =>{
    console.log(`Server corriendo en port ${PORT}`);    
})
