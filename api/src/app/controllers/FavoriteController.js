const { favoritesRepository } = require('../repositories/FavoritesRepository');

class FavoriteController {
  async index(request, response) {
    const { orderBy } = request.query;
    const favorites = await favoritesRepository.findAll({ orderBy });

    response.json(favorites);
  }

  async show(request, response) {
    const { id } = request.params;
    const favorite = await favoritesRepository.findById({ id });

    if (!favorite) {
      return response.status(404).json({ error: 'Favorite not found' });
    }

    response.json(favorite);
  }

  async store(request, response) {
    const {
      name, rating, note, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    if (!rating) {
      return response.status(400).json({ error: 'Rating is required' });
    }

    const favoriteExists = await favoritesRepository.findByName({ name });

    if (favoriteExists) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const favorite = await favoritesRepository.save({
      name, rating, note, category_id,
    });

    response.json(favorite);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, rating, note, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    if (!rating) {
      return response.status(400).json({ error: 'Rating is required' });
    }

    const favoriteExists = await favoritesRepository.findById({ id });
    if (!favoriteExists) {
      return response.status(404).json({ error: 'Favorite not found' });
    }

    const favoriteByName = await favoritesRepository.findByName({ name });
    if (favoriteByName && favoriteByName.id !== id) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const favorite = await favoritesRepository.update(id, {
      name, rating, note, category_id,
    });

    response.json(favorite);
  }

  async delete(request, response) {
    const { id } = request.params;
    await favoritesRepository.delete({ id });
    response.sendStatus(204);
  }
}

const favoriteController = new FavoriteController();
module.exports = { favoriteController };
