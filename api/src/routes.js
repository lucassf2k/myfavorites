const { Router } = require('express');

const { favoriteController } = require('./app/controllers/FavoriteController');

const router = Router();

router.get('/favorites', favoriteController.index);
router.post('/favorites', favoriteController.store);
router.get('/favorites/:id', favoriteController.show);
router.put('/favorites/:id', favoriteController.update);
router.delete('/favorites/:id', favoriteController.delete);

module.exports = { router };
