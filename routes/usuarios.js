// 🟩 IMPORTAR MÓDULOS NECESARIOS
import express from "express";
import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";


// 🟩 CREAR EL ROUTER
const router = express.Router();

// 🟩 MOSTRAR FORMULARIO DE REGISTRO
router.get("/registro", (req, res) => {
  res.render("usuarios/registro"); // Renderiza la vista de registro
});

// 🟩 PROCESAR REGISTRO DE USUARIO (AHORA ENCRIPTA CONTRASEÑA)
router.post("/registro", async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    // Encriptar la contraseña antes de guardar
    const hash = await bcrypt.hash(password, 10); // 10 es el nivel de "salting"
    const nuevoUsuario = new Usuario({ nombre, email, password: hash });
    await nuevoUsuario.save();
    res.redirect("/usuarios/login");
  } catch (error) {
    res.render("usuarios/registro", { error: "Error al registrar usuario. ¿Email ya registrado?" });
  }
});


// 🟩 MOSTRAR FORMULARIO DE LOGIN
router.get("/login", (req, res) => {
  res.render("usuarios/login");
});

// 🟩 PROCESAR LOGIN DE USUARIO (AHORA COMPARA HASH)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.render("usuarios/login", { error: "Usuario o contraseña incorrectos." });
    }

    // Comparar la contraseña ingresada con el hash guardado
    const match = await bcrypt.compare(password, usuario.password);
    if (!match) {
      return res.render("usuarios/login", { error: "Usuario o contraseña incorrectos." });
    }

    // Login exitoso
    res.redirect("/");
  } catch (error) {
    res.render("usuarios/login", { error: "Ocurrió un error al iniciar sesión." });
  }
});

// Login exitoso
req.session.usuarioId = usuario._id; // Guardar el ID en la sesión
res.redirect("/panel");              // Redirigir al panel

// 🟩 CERRAR SESIÓN
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

export default router;



