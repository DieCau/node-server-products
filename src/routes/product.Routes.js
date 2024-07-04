// File para crear la ruta y el controller correspondiente
import { Router } from "express";
import {
  createProduct,
  getProducts,
  deleteById,
  getById,
  searchWithOptions,
  editProduct,
} from "../controllers/product.controllers.js";

import { validateToken } from "../validators/validateToken.js";

const router = Router();

// Ruta para Listar 1 Producto (GET)
router.get("/product/:id", getById);

// Ruta para buscar producto con opciones
router.get("/products/search", searchWithOptions);

// Ruta para Listar todos los productos (GET)
// Agrego el "validateToken" antes del controlador
router.get("/products", validateToken, getProducts);

// Ruta para CREAR un producto (POST)
// Agrego el "validateToken" antes del controlador
router.post("/product", validateToken, createProduct);

// Ruta para BORRAR un producto por ID (DELETE)
// Agrego el "validateToken" antes del controlador
router.delete("/product/:id", validateToken, deleteById);

// Ruta para EDITAR un atributo en particular
// Agrego el "validateToken" antes del controlador
router.patch("/product/:id", validateToken, editProduct);

export default router;
// Este file debe importar en index.js
