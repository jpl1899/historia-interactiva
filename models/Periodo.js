import mongoose from "mongoose";

const periodoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  descripcion: {
    type: String,
    required: true
  }
});

const Periodo = mongoose.model("Periodo", periodoSchema);

export default Periodo;
