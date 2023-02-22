import { Query } from '../../database/index.js';

class CategoriesRepository {
  async findAll() {
    const rows = await Query(`
      SELECT * FROM categories
      ORDER BY name
    `);

    return rows;
  }

  async save({ name }) {
    const [row] = await Query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }
}

const categoriesRepository = new CategoriesRepository();
export { categoriesRepository };
