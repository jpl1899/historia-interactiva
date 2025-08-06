// routes/usuarios.js

import express from "express";
import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";

const router = express.Router();

// 🟩 Ruta: Formulario de registro
router.get("/registro", (req, res) => {
  res.render("usuarios/registro");
});

// 🟩 Ruta: Procesar formulario de registro
router.post("/registro", async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = new Usuario({ nombre, email, password: hashedPassword });
    await usuario.save();
    res.redirect("/usuarios/login");
  } catch (error) {
    res.status(500).send("Error al registrar el usuario.");
  }
});

// 🟩 Ruta: Formulario de login
router.get("/login", (req, res) => {
  res.render("usuarios/login");
});

// 🟩 Ruta: Procesar formulario de login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).send("Email no registrado");
    }

    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).send("Contraseña incorrecta");
    }

    req.session.usuarioId = usuario._id;
    res.redirect("/panel");
  } catch (err) {
    console.error("❌ Error al hacer login:", err);
    res.status(500).send("Error interno del servidor");
  }
});

// 🟩 Ruta: Cerrar sesión
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

export default router;

