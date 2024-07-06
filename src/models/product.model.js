// Para insertar documentos en la BD hay que crear un modelo de datos
import { Schema, model } from "mongoose";
// Importar el file para usar la expresion regular
import { imageRegex } from "../helpers/imageURLRegex.js";

const productSchema = new Schema(
  {
    // Guarda el ID de un objeto 
    userId: {
      type: Schema.ObjectId,
    },
    //Declarar tipos de datos de un documento (registro)
    // Hacer validaciones
    name: {
      type: String,
      required: [true, "Debe ingresar un nombre"],
      unique: true,
      minLength: 5,
      maxLength: 80,
    },
    price: {
      type: Number,
      required: [true, "Debe ingresar un Precio"],
      min: 1,
      max: 5_000_000,
    },
    discountPercentage: {
      type: Number,
      min: 1,
      max: 99,
    },
    category: {
      type: String,
      required: [true, "Debe ingresar una Categoria"],
      enum: {
        values: ["Teclados", "Notebooks", "Camaras", "Parlantes", "Ratones"],
        message: "{VALUE} no es una categoria valida",
      },
    },
    visible: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      match: [imageRegex, "La imagen ingresada es invalida"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// El nombre de la Colección (tabla) es "Product" pero se crea en plural "Products"
export default model("Product", productSchema);

// Para utilizar el modelo ademas debemos crear los controllers correspondientes
