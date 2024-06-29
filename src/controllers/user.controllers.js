import User from "../models/user.model.js"
import { hashPassword } from "../helpers/hashPassword.js";

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