import { Router } from 'express';

const router = Router();

router.use((req, res) => {
  res.status(404).json({ message: 'Ruta no definida/invalida' });
});

export default router;