const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await db.Query(`
      SELECT * FROM categories
      ORDER BY name
    `);

    return rows;
  }

  async save({ name }) {
    const [row] = await db.Query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNIN *
    `, [name]);

    return row;
  }
}

const categoriesRepository = new CategoriesRepository();
module.exports = { categoriesRepository };
