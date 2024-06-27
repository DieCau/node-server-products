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

// LISTAR *** Productos con opciones
export const searchWithOptions = async (req, res) => {
  const { name, price, category } = req.query;
  const priceSortQuery = price == "asc" ? "asc" : "desc"; 
  const searchQuery = { visible: true };

  if (name) {        
    
    /* Buscar por name con una expresión regular 
    donde name es el parámetro que se evalua e "i" significa 
    ignore case (ignora como está escrita la búsqueda, 
    si es con mayúsculas o minúsculas) 
    */
    const partialMatchName = new RegExp(name, "i");
    
    /* name es el atributo que vamos a buscar 
    $regex es un objeto propio de MongoDB que 
    proporciona capacidades de exp reg a partir de 
    cadenas de coincidencia de patrones en consultas */    
    searchQuery.name = { $regex: partialMatchName };
  }

  if (category) {
    searchQuery.category = category;    
  }

  if (price == "disc") {
    /* El operador $exists busca documentos 
    que contengan o no un campo específico */
    searchQuery.discountPercentage = { $exists: true };
  }

  try {
    // Buscar por price (ascendente, descendente y descuento [asc, desc, disc]) 
    // con la variable searchQuery  
    const productsFound = await Product.find(searchQuery).sort({
      price: priceSortQuery,
    });


    if (productsFound.length >= 1) {
      return res.status(200).json(productsFound);
    }

    return res
    .status(404)
    .json({ message: "Producto No Encontrado" });
  
  } catch (error) {
    return res.status(500).json({ message: error.message });    
  }
}


// EDITAR 1 **** Producto por ID
export const editProduct = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    const product = await Product.findById(id);

    if (product) {
      await Product.findByIdAndUpdate(id, payload)
      return res.status(200).json({ message: "Producto Modificado exitosamente" });
    }
    return res.status(404).json({ message: "Producto No Encontrado" })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }  
} 
