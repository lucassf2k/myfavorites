import { Router } from 'express';

import { categoryController } from './app/controllers/CategoryController.js';
import { favoriteController } from './app/controllers/FavoriteController.js';

const router = Router();

router.get('/favorites', favoriteController.index);
router.post('/favorites', favoriteController.store);
router.get('/favorites/:id', favoriteController.show);
router.put('/favorites/:id', favoriteController.update);
router.delete('/favorites/:id', favoriteController.delete);

router.get('/categories', categoryController.index);
router.post('/categories', categoryController.store);

export { router };
