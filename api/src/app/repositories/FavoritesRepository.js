const db = require('../../database');

class FavoritesRepository {
  async findAll({ orderBy = 'ASC' }) {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.Query(`
      SELECT favorites.*, categories.name AS category_name
      FROM favorites
      LEFT JOIN categories ON categories.id = favorites.id
      ORDER BY favorites.name ${direction}
    `);

    return rows;
  }

  async findById({ id }) {
    const [row] = await db.Query(`
      SELECT favorites.*, categories.name AS category_name
      FROM favorites
      LEFT JOIN categories ON categories.id = favorites.category_id
      WHERE id = $1
    `, [id]);

    return row;
  }

  async findByName({ name }) {
    const [row] = await db.Query(`
      SELECT *
      FROM favorites
      WHERE name = $1
    `, [name]);

    const customRow = {
      id: row.id,
      name: row.name.toLowerCase(),
      rating: row.rating,
      note: row.note,
      category_id: row.category_id,
    };

    return customRow;
  }

  async save({
    name, rating, note, category_id,
  }) {
    const [row] = await db.Query(`
      INSERT INTO favorites(name, rating, note, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, rating, note, category_id]);

    return row;
  }

  async update(id, {
    name, rating, note, category_id,
  }) {
    const [row] = await db.Query(`
      UPDATE favorites
      SET name = $1, rating = $2, note = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `[name, rating, note, category_id, id]);

    return row;
  }

  async delete({ id }) {
    const deleteOp = await db.Query(`
      DELETE FROM favorites
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

const favoritesRepository = new FavoritesRepository();
module.exports = { favoritesRepository };
