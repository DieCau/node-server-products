import User from "../models/user.model.js";
import { hashPassword } from "../helpers/hashPassword.js";
import { signToken } from "../helpers/signToken.js";

export const createUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const newUser = User({
      email,
      password,
      role
    });
    // El atributo "password" del nuevo user recibe el password hasheado
    newUser.password = await hashPassword(password);
    // Ahora guardamos en la BD
    await newUser.save();
    const token = signToken(newUser)

    res.status(201).json({ token: token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email });
  const auth = signToken(user);

  return res.status(200).json(auth);
};

//  LISTAR ***** todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
