import User from "../models/user.model.js"

export const createUser = async(req, res) => {
    const { email, password } = req.body
        try {
            const newUser = User({
                email: email,
                password: password
            })
            return res.status(201).json({ message: "Usuario creado exitosamente" })           
        } catch (error) {
            return res.status(500).json({ message: error.message });            
        }
} 