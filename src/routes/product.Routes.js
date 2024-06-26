// File para crear la ruta y el controller correspondiente
import { Router } from "express";
import { 
    createProduct, 
    getProducts, 
    deleteById,
    getById,
    searchWithOptions, 
} from "../controllers/product.controllers.js";

const router = Router();

// Ruta para Crear un producto (POST)
router.post("/product", createProduct);

// Ruta para Listar todos los productos (GET)
router.get("/products", getProducts);

// Ruta para Borrar un producto por ID (DELETE)
router.delete("/product/:id", deleteById);

// Ruta para Listar 1 Producto (GET)
router.get("/product/:id", getById);


router.get("/products/search", searchWithOptions)

export default router;
// Este file debe importar en index.js