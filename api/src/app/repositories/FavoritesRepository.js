const db = require('../../database');

class FavoritesRepository {
  async findAll({ orderBy = 'ASC' }) {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.Query(`
      SELECT * 
      FROM favorites
      ORDER BY ${direction}
    `);

    return rows;
  }

  async findById({ id }) {
    const [row] = await db.Query(`
      SELECT *
      FROM favorites
      WHERE id = $1
    `, [id]);

    return row;
  }
}

const favoritesRepository = new FavoritesRepository();
module.exports = { favoritesRepository };
