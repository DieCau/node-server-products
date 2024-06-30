import User from "../models/user.model.js"
import { hashPassword } from "../helpers/hashPassword.js";
import { comparePasswords } from "../helpers/comparePasswords.js";

export const createUser = async(req, res) => {
    const { email, password } = req.body
        try {
            const newUser = User({
                email: email,
                password: password
            })
            // El atributo "password" del nuevo user recibe el password hasheado
            newUser.password = await hashPassword(password)
            // Ahora guardamos en la BD
            await newUser.save()
            
            res.status(201).json({ message: "Usuario creado exitosamente" })           
        } catch (error) {
            return res.status(500).json({ message: error.message });            
        }
} 

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email: email})
    
    // comparePasswords viene con 2 parametros para ser comparados
    const validPassword = await comparePasswords(user.password, password)

    // Si la comparacion NO es valida retorna mensaje Error(401 - No autorizado)
    if (!validPassword) {
        return res.status(401).json({ message: "Email o contraseña incorrecta"})        
    }
    // Por el contrario SI es valida la comparacion, mensaje (200) exitoso
    return res.status(200).json({message: "El usuario se ha logueado correctamente!"})

}