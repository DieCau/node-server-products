import { validationResult } from "express-validator";

export const validateFields = (req, res, next) => {
    
    // validationResult captura los errores que tiro la libreria de req
    // los guarda en "errors"
    const errors = validationResult(req)
    
    // Si "errors" NO esta vacio devuelve status (400) y el errors en un array 
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})        
    }
    
    // En el caso de que NO haya errores continue con el codigo
    // En user.Routes.js con el controller "createUser" Ln.13
    next();
}

// Error(400) marca un error del usuario
// File que se importa en user.Routes.js