import { Query } from '../../database/index.js';

class FavoritesRepository {
  async findAll({ orderBy = 'ASC' }) {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await Query(`
      SELECT favorites.*, categories.name AS category_name
      FROM favorites
      LEFT JOIN categories ON categories.id = favorites.category_id
      ORDER BY favorites.name ${direction}
    `);

    return rows;
  }

  async findById({ id }) {
    const [row] = await Query(`
      SELECT favorites.*, categories.name AS category_name
      FROM favorites
      LEFT JOIN categories ON categories.id = favorites.category_id
      WHERE favorites.id = $1
    `, [id]);

    return row;
  }

  async findByName({ name }) {
    const [row] = await Query(`
      SELECT *
      FROM favorites
      WHERE name = $1
    `, [name]);

    return row;
  }

  async save({
    name, rating, note, category_id,
  }) {
    const [row] = await Query(`
      INSERT INTO favorites(name, rating, note, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, rating, note, category_id]);

    return row;
  }

  async update(id, {
    name, rating, note, category_id,
  }) {
    const [row] = await Query(`
      UPDATE favorites
      SET name = $1, rating = $2, note = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, rating, note, category_id, id]);

    return row;
  }

  async delete({ id }) {
    const deleteOp = await Query(`
      DELETE FROM favorites
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

const favoritesRepository = new FavoritesRepository();
export { favoritesRepository };
