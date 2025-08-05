// 🟩 CARGA DE VARIABLES DE ENTORNO Y MÓDULOS BÁSICOS
import 'dotenv/config'; // Cargar .env al principio
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from 'method-override';

// 🟩 RUTAS Y MODELOS
import periodosRouter from './routes/periodos.js';
import Periodo from "./models/Periodo.js";

// 🟩 CONFIGURACIÓN DE EXPRESS
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// 🟩 CONFIGURAR VISTAS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));

// 🟩 CONEXIÓN A MONGODB
console.log("🔍 URI leída:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Conectado a MongoDB"))
.catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

// 🟩 RUTAS
app.use('/periodos', periodosRouter);

// Ruta principal
app.get("/", (req, res) => {
  const nombre = "Juan";
  const periodos = ["Prehistoria", "Edad Antigua", "Edad Media", "Edad Moderna", "Edad Contemporánea"];
  res.render("index", { nombre, periodos });
});

// Ruta para ver un período específico
const descripciones = {
  "Prehistoria": "La prehistoria es el periodo anterior a la invención de la escritura, abarcando desde los primeros homínidos hasta las primeras civilizaciones.",
  "Edad Antigua": "La Edad Antigua comienza con la invención de la escritura y comprende civilizaciones como Egipto, Grecia y Roma.",
  "Edad Media": "La Edad Media abarca desde la caída del Imperio Romano hasta el descubrimiento de América en 1492.",
  "Edad Moderna": "La Edad Moderna incluye el Renacimiento, el descubrimiento de América y las grandes revoluciones.",
  "Edad Contemporánea": "La Edad Contemporánea va desde la Revolución Francesa hasta la actualidad, con grandes avances y conflictos globales."
};

app.get("/periodo/:nombre", (req, res) => {
  const nombrePeriodo = req.params.nombre;
  const descripcion = descripciones[nombrePeriodo] || "No hay descripción disponible para este período.";
  res.render("periodo", { nombrePeriodo, descripcion });
});

// Ruta de prueba para edición
app.get('/periodos/editar-test', (req, res) => {
  res.send('¡Ruta de edición alcanzada!');
});

// 🟩 INICIAR SERVIDOR
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Servidor iniciado en http://localhost:${port}`);
});




















