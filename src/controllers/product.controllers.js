// Controllers para utilizar con el modelo Product y ademas debe estar en el callback de la ruta correspondiente
import Product from "../models/product.model.js";

// CREAR ***** un producto
export const createProduct = async (req, res) => {
  const { name, price, discountPercentage, category, visible, image } = req.body
  try {
    const newProduct = await Product.create({
      name: name,
      price: price,
      discountPercentage: discountPercentage,
      category: category,
      visible: visible,
      image: image,
    });
    res.status(201).json({ id: newProduct._id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//  LISTAR ***** todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// BORRAR **** Producto por ID
export const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    
    if (product) {      
      await Product.findByIdAndDelete(id)
      return res.status(204).json();
    }
    return res.status(404).json({message: "Producto No Encontrado"})
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// LISTAR 1 **** Producto por ID
export const getById = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findById(id);
    
    if (product) {
      return res.status(200).json(product)
    }
    return res.status(404).json({ message: "Producto No Encontrado" })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
