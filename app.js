import express from "express"; // importo la libreria, despues de instalar (npm i expresss) 
const app = express(); // guarda express en app para luego usar sus funciones
app.set ("view engine", "ejs"); // Cuando yo pida res.render("login"), usá archivos .ejs para mostrar la vistas
app.use(express.static("public")); // app.use se usa para aplicar un mddleware
app.use(express.urlencoded({extended:true})); // Permite que Express entienda los datos que vienen en formularios HTML enviados con el método POST
app.use(express.json());
import periodosRouter from './routes/periodos.js';
app.use('/periodos', periodosRouter)

import dotenv from "dotenv"; // Permite mantener información sensible (como contraseñas, claves, strings de conexión) fuera del código fuente
dotenv.config(); // Es un método que inicializa la lectura del archivo .env
import path from "path"; // l módulo path permite construir rutas de archivo forma segura y compatible con cualquier sistema operativo
import { fileURLToPath } from "url"; // Esta función permite convertir una URL de archivo (como la del módulo actual) en una ruta del sistema
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
/*
app.get("/", (req, res) => {
      res.render("index");
        });*/

// Para decirle al servidor que renderice una vista (en este caso index.ejs)




const port = process.env.PORT || 3000; // ódigo JavaScript que accede a variables de entorno con process.env

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
//app.listen(port, ...) inicia el servidor Express en el puerto indicado, El segundo argumento es una función callback que se ejecuta cuando el servidor arranca correctamente


app.get("/", (req, res) => {
  const nombre = "Juan";
  const periodos = ["Prehistoria", "Edad Antigua", "Edad Media", "Edad Moderna", "Edad Contemporánea"];
  res.render("index", { nombre, periodos });
});

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

/*app.get("/api/periodos", async (req, res) => {
  try {
    const periodos = await Periodo.find();
    res.json(periodos);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los períodos históricos" });
  }
});*/


import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

import Periodo from "./models/Periodo.js";

import methodOverride from 'method-override';
app.use(methodOverride('_method'));


app.use('/periodos', periodosRouter);

app.get('/periodos/editar-test', (req, res) => {
  res.send('¡Ruta de edición alcanzada!');
});



















