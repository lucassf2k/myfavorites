import { categoriesRepository } from '../repositories/CategoriesRepository.js';

class CategoryController {
  async index(request, response) {
    const categories = await categoriesRepository.findAll();
    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(404).json({ error: 'Name is required' });
    }

    const category = await categoriesRepository.save({ name });
    response.json(category);
  }
}

const categoryController = new CategoryController();
export { categoryController };
