import express from 'express';
import Periodo from '../models/Periodo.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const periodos = await Periodo.find();
  res.render('periodos/index', { periodos });
});

router.get('/nuevo', (req, res) => {
  res.render('periodos/nuevo');
});

router.post('/', async (req, res) => {
  const nuevo = new Periodo(req.body);
  await nuevo.save();
  res.redirect('/periodos');
});

router.get('/editar/:id', async (req, res) => {
  console.log('Renderizando vista editar...');
  const periodo = await Periodo.findById(req.params.id);
  res.render('periodos/editar', { periodo });
});

router.put('/:id', async (req, res) => {
  await Periodo.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/periodos');
});

router.delete('/:id', async (req, res) => {
  await Periodo.findByIdAndDelete(req.params.id);
  res.redirect('/periodos');
});

export default router;
