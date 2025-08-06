// 🟩 IMPORTAR MONGOOSE
import mongoose from "mongoose";

// 🟩 DEFINICIÓN DEL ESQUEMA DE USUARIO
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },          // Nombre del usuario (obligatorio)
  email: { type: String, required: true, unique: true }, // Email único (obligatorio)
  password: { type: String, required: true }          // Contraseña (hash, obligatorio)
});

// 🟩 CREAR Y EXPORTAR EL MODELO DE USUARIO
const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;

